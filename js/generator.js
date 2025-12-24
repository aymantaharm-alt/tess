export function initGenerator() {
    const generateBtn = document.getElementById('generateBtn');
    const promptInput = document.getElementById('promptInput');
    const imagePreview = document.getElementById('imagePreview');
    const saveBtn = document.getElementById('saveToGalleryBtn');
    const downloadBtn = document.getElementById('downloadImageBtn');

    if (!generateBtn) return;

    let selectedSize = 'square';
    let selectedQuality = 'medium';
    let selectedStyle = 'none';

    // معالجة أزرار الأحجام
    document.querySelectorAll('.size-option[data-size]').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.size-option[data-size]').forEach(opt => {
                opt.classList.remove('selected');
            });
            option.classList.add('selected');
            selectedSize = option.getAttribute('data-size');
        });
    });

    // معالجة أزرار الجودة
    document.querySelectorAll('.size-option[data-quality]').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.size-option[data-quality]').forEach(opt => {
                opt.classList.remove('selected');
            });
            option.classList.add('selected');
            selectedQuality = option.getAttribute('data-quality');
        });
    });

    generateBtn.addEventListener('click', async () => {
        const prompt = promptInput.value.trim();
        if (!prompt) {
            showToast('الرجاء إدخال وصف للصورة', 'error');
            return;
        }

        // تحقق من الرصيد
        if (userCredits <= 0) {
            document.getElementById("insufficientModal").classList.remove("hidden");
            return;
        }

        // حساب استهلاك الرصيد
        let creditCost = 1;
        if (selectedQuality === 'high') creditCost = 2;
        if (selectedQuality === 'ultra') creditCost = 5;

        if (userCredits < creditCost) {
            document.getElementById("insufficientModal").classList.remove("hidden");
            return;
        }

        generateBtn.disabled = true;
        generateBtn.textContent = 'جاري التوليد...';

        try {
            // استدعاء واجهة برمجة التطبيقات (API)
            const response = await fetch('https://api.example.com/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': 'YOUR_API_KEY'
                },
                body: JSON.stringify({
                    prompt: prompt,
                    size: selectedSize,
                    quality: selectedQuality,
                    style: selectedStyle
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // عرض الصورة
            imagePreview.innerHTML = `
                <div class="image-preview-content">
                    <img src="${data.image_url}" alt="Generated Image" class="generated-image">
                </div>
            `;

            // تحديث الإحصائيات
            updateStatistics('totalGenerated', 1);
            updateStatistics('creditsUsed', creditCost);
            updateUserCredits(-creditCost);

            // تمكين الزر
            generateBtn.disabled = false;
            generateBtn.textContent = 'إنشاء';

            // تمكين أزرار الحفظ والتنزيل
            saveBtn.disabled = false;
            downloadBtn.disabled = false;

        } catch (error) {
            console.error('Error generating image:', error);
            showToast('فشل توليد الصورة. الرجاء المحاولة مرة أخرى لاحقًا.', 'error');
            generateBtn.disabled = false;
            generateBtn.textContent = 'إنشاء';
        }
    });

    saveBtn.addEventListener('click', () => {
        const prompt = promptInput.value.trim();
        const imgElement = imagePreview.querySelector('img');
        if (imgElement && prompt) {
            const galleryGrid = document.getElementById('galleryGrid');
            if (galleryGrid.querySelector('p')) {
                galleryGrid.innerHTML = '';
            }

            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item relative rounded-xl overflow-hidden shadow-lg group fade-in';
            const imageContent = imagePreview.querySelector('div').cloneNode(true);
            galleryItem.appendChild(imageContent);

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.innerHTML = '&times;';
            deleteBtn.onclick = (e) => {
                e.stopPropagation();
                galleryItem.remove();
                if (galleryGrid.children.length === 0) {
                    galleryGrid.innerHTML = '<p class="gallery-placeholder">ستظهر أعمالك المحفوظة هنا</p>';
                }
            };
            imageContent.appendChild(deleteBtn);

            galleryGrid.prepend(galleryItem);

            // حفظ الصورة في IndexedDB
            saveImageToIndexedDB(prompt, imgElement.src, selectedSize, selectedQuality, selectedStyle);

            // تحديث الإحصائيات
            updateStatistics('totalSaved', 1);

            showToast('تم حفظ الصورة في معرضك!', 'success');
        } else {
            showToast('لا توجد صورة لحفظها', 'error');
        }
    });

    downloadBtn.addEventListener('click', () => {
        const imgElement = imagePreview.querySelector('img');
        if (imgElement) {
            const link = document.createElement('a');
            link.href = imgElement.src;
            const timestamp = new Date().getTime();
            const imageName = `ATIGAI-${timestamp}-generatedimage`;
            link.download = imageName;
            document.body.appendChild(link);
            link.click();
            showToast('تم تنزيل الصورة بنجاح!', 'info');
            document.body.removeChild(link);
        } else {
            showToast('لا توجد صورة لتنزيلها', 'error');
        }
    });

    saveBtn.disabled = true;
    downloadBtn.disabled = true;
}

// وظيفة حفظ الصورة في قاعدة البيانات
export async function saveImageToIndexedDB(prompt, imgSrc, size, quality, style) {
    try {
        await databaseReady;
        const transaction = imageDatabase.transaction('images', 'readwrite');
        const store = transaction.objectStore('images');
        const imageEntry = {
            id: Date.now(),
            prompt: prompt,
            image: imgSrc,
            date: new Date().toISOString(),
            settings: {
                size: size,
                quality: quality,
                style: style
            }
        };

        const addRequest = store.add(imageEntry);
        return new Promise((resolve, reject) => {
            addRequest.onsuccess = () => {
                resolve();
            };
            addRequest.onerror = (event) => {
                reject(event.target.error);
            };
        });
    } catch (error) {
        console.error('Error saving image to IndexedDB:', error);
        showToast('فشل حفظ الصورة', 'error');
    }
}

// وظيفة إظهار الرسائل
export function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) {
        // إذا لم يكن هناك حاوية، قم بإنشائها
        const container = document.createElement('div');
        container.id = 'toastContainer';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    let icon = '';
    if (type === 'success') icon = '✓';
    else if (type === 'error') icon = '✕';
    else if (type === 'info') icon = 'ⓘ';
    else if (type === 'warning') icon = '⚠';

    toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
    document.getElementById('toastContainer').appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}