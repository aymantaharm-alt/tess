export function initTabs() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');

            // إزالة التفعيل من الألسنة
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.add('hidden'));

            // تفعيل اللسان المختار
            tab.classList.add('active');
            document.getElementById(`${tabName}Tab`).classList.remove('hidden');

            // تحميل محتوى المعرض عند التبديل إليه
            if (tabName === 'gallery') {
                loadGalleryImages();
            }
            // تحميل الإحصائيات عند التبديل إلى الإعدادات
            if (tabName === 'settings') {
                loadStatistics();
            }
        });
    });
}