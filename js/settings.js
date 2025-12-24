export function initSettings() {
    // معالج زر الإغلاق في نافذة نقص الرصيد
    const closeInsufficientBtn = document.getElementById("closeInsufficientModal");
    if (closeInsufficientBtn) {
        closeInsufficientBtn.addEventListener('click', () => {
            const modal = document.getElementById("insufficientModal");
            if (modal) {
                modal.classList.add("hidden");
            }
        });
    }

    // معالج زر إغلاق نافذة المعرض
    const galleryModalClose = document.getElementById('galleryModalClose');
    if (galleryModalClose) {
        galleryModalClose.addEventListener('click', () => {
            const modal = document.getElementById('galleryModal');
            if (modal) {
                modal.classList.remove('active');
            }
        });
    }

    // معالج زر إعادة التوليد في نافذة المعرض
    const regenerateBtn = document.getElementById('galleryModalRegenerate');
    if (regenerateBtn) {
        regenerateBtn.addEventListener('click', () => {
            const galleryModal = document.getElementById('galleryModal');
            if (galleryModal) {
                galleryModal.classList.remove('active');
            }

            // التبديل إلى تبويب الإنشاء
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('active');
            });
            document.querySelector('[data-tab="create"]').classList.add('active');
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.add('hidden');
            });
            document.getElementById('createTab').classList.remove('hidden');

            // تعبئة حقل الإدخال بالبرومبت
            const prompt = document.getElementById('galleryModalPrompt').textContent;
            const promptInput = document.getElementById('promptInput');
            if (promptInput) {
                promptInput.value = prompt;
            }
            // يمكن إضافة تعيين الإعدادات الأخرى هنا
        });
    }

    // معالج زر التنزيل في نافذة المعرض
    const downloadModalBtn = document.getElementById('galleryModalDownload');
    if (downloadModalBtn) {
        downloadModalBtn.addEventListener('click', () => {
            const imgSrc = document.getElementById('galleryModalImage').src;
            const link = document.createElement('a');
            link.href = imgSrc;
            link.download = `ATIGAI-${Date.now()}-gallery`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showToast('تم تنزيل الصورة', 'success');
        });
    }

    // فحص حالة الاتصال
    function checkConnection() {
        if (!navigator.onLine) {
            showConnectionError();
        }
    }

    window.addEventListener('online', () => {
        // إخفاء رسالة الخطأ إذا كان الاتصال قد استعاد
        const errorDiv = document.querySelector('.connection-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    });

    window.addEventListener('offline', checkConnection);
    checkConnection(); // فحص الحالة عند التحميل
}

function showConnectionError() {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'connection-error';
    errorDiv.innerHTML = `<span>⚠️</span><span>فقدان الاتصال بالإنترنت</span>`;
    document.body.appendChild(errorDiv);

    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}