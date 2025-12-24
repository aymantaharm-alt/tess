class HTMLLoader {
    static async loadPartial(elementId, filePath) {
        try {
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const html = await response.text();
            document.getElementById(elementId).innerHTML = html;
        } catch (error) {
            console.error(`Error loading partial ${filePath}:`, error);
            document.getElementById(elementId).innerHTML = '<p>حدث خطأ أثناء تحميل المحتوى.</p>';
        }
    }
}

// تحميل الأقسام
document.addEventListener('DOMContentLoaded', async () => {
    await HTMLLoader.loadPartial('header-placeholder', 'partials/header.html');
    await HTMLLoader.loadPartial('tabs-placeholder', 'partials/tabs.html');
    await HTMLLoader.loadPartial('create-placeholder', 'partials/create.html');
    await HTMLLoader.loadPartial('gallery-placeholder', 'partials/gallery.html');
    await HTMLLoader.loadPartial('tutorial-placeholder', 'partials/tutorial.html');
    await HTMLLoader.loadPartial('settings-placeholder', 'partials/settings.html');
    await HTMLLoader.loadPartial('modals-placeholder', 'partials/modals/style-modal.html');
    await HTMLLoader.loadPartial('modals-placeholder', 'partials/modals/gallery-modal.html');
    await HTMLLoader.loadPartial('modals-placeholder', 'partials/modals/insufficient-credits.html');
});