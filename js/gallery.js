let imageDatabase;
let databaseReady = new Promise((resolve, reject) => {
    const dbOpenRequest = indexedDB.open('ImageGeneratorDB', 1);

    dbOpenRequest.onupgradeneeded = event => {
        const database = event.target.result;
        if (!database.objectStoreNames.contains('images')) {
            const store = database.createObjectStore('images', { keyPath: 'id' });
            store.createIndex('date', 'date', { unique: false });
        }
    };

    dbOpenRequest.onsuccess = event => {
        imageDatabase = event.target.result;
        resolve(imageDatabase);
    };

    dbOpenRequest.onerror = event => {
        console.error('Failed to open IndexedDB:', event.target.errorCode);
        reject(event.target.errorCode);
    };
});

export async function loadGalleryImages() {
    await databaseReady;
    const transaction = imageDatabase.transaction('images', 'readonly');
    const store = transaction.objectStore('images');
    const getAllRequest = store.getAll();

    getAllRequest.onsuccess = () => {
        const galleryGrid = document.getElementById('galleryGrid');
        if (!galleryGrid) return;

        galleryGrid.innerHTML = '';
        const images = getAllRequest.result;

        if (images.length === 0) {
            galleryGrid.innerHTML = '<p class="gallery-placeholder">ستظهر أعمالك المحفوظة هنا</p>';
            return;
        }

        images.reverse(); // عرض الأحدث أولاً

        images.forEach(image => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item relative rounded-xl overflow-hidden shadow-lg group fade-in';

            galleryItem.innerHTML = `
                <div class="image-container">
                    <img src="${image.image}" alt="Gallery Image" class="w-full h-full object-cover cursor-pointer">
                </div>
                <button class="delete-btn" data-id="${image.id}">&times;</button>
                <button class="download-gallery" data-src="${image.image}">⬇️</button>
            `;

            // معالج حذف الصورة
            const deleteBtn = galleryItem.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = e.currentTarget.getAttribute('data-id');
                deleteImageFromGallery(id);
                galleryItem.remove();
                if (galleryGrid.children.length === 0) {
                    galleryGrid.innerHTML = '<p class="gallery-placeholder">ستظهر أعمالك المحفوظة هنا</p>';
                }
                showToast('تم حذف الصورة من المعرض', 'success');
            });

            // معالج تنزيل الصورة
            const downloadBtn = galleryItem.querySelector('.download-gallery');
            downloadBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const imgSrc = e.currentTarget.getAttribute('data-src');
                const link = document.createElement('a');
                link.href = imgSrc;
                link.download = `ATIGAI-${Date.now()}-gallery`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                showToast('تم تنزيل الصورة', 'success');
            });

            // معالج النقر لعرض الصورة في نافذة منبثقة
            const imageContainer = galleryItem.querySelector('.image-container');
            if (imageContainer) {
                imageContainer.addEventListener('click', () => {
                    const galleryModal = document.getElementById('galleryModal');
                    if (!galleryModal) return;

                    const elements = {
                        image: document.getElementById('galleryModalImage'),
                        prompt: document.getElementById('galleryModalPrompt'),
                        model: document.getElementById('galleryModalModel'),
                        quality: document.getElementById('galleryModalQuality'),
                        size: document.getElementById('galleryModalSize'),
                        style: document.getElementById('galleryModalStyle'),
                        date: document.getElementById('galleryModalDate')
                    };

                    elements.image.src = image.image;
                    elements.prompt.textContent = image.prompt;
                    elements.model.textContent = image.settings?.model || 'Default';
                    elements.quality.textContent = image.settings?.quality || 'Medium';
                    elements.size.textContent = image.settings?.size || 'Square';
                    if (image.settings?.style && image.settings.style !== 'none') {
                        elements.style.textContent = image.settings.style;
                    } else {
                        elements.style.textContent = 'بدون';
                    }
                    if (elements.date && image.date) {
                        const date = new Date(image.date);
                        elements.date.textContent = date.toLocaleDateString('ar-SA');
                    }

                    galleryModal.classList.add('active');
                });
            }

            galleryGrid.appendChild(galleryItem);
        });
    };
}

export async function deleteImageFromGallery(id) {
    await databaseReady;
    const transaction = imageDatabase.transaction('images', 'readwrite');
    const store = transaction.objectStore('images');
    const deleteRequest = store.delete(id);

    return new Promise((resolve, reject) => {
        deleteRequest.onsuccess = () => resolve();
        deleteRequest.onerror = (event) => reject(event.target.error);
    });
}