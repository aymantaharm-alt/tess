let userCredits = 100;
let databaseReady;

export async function initCredits() {
    // تهيئة قاعدة بيانات الرصيد
    const dbOpenRequest = indexedDB.open('CreditDB', 1);

    databaseReady = new Promise((resolve, reject) => {
        dbOpenRequest.onupgradeneeded = event => {
            const database = event.target.result;
            if (!database.objectStoreNames.contains('credits')) {
                const store = database.createObjectStore('credits', { keyPath: 'id' });
                store.createIndex('type', 'type', { unique: false });
            }
            if (!database.objectStoreNames.contains('statistics')) {
                const store = database.createObjectStore('statistics', { keyPath: 'id' });
            }
        };

        dbOpenRequest.onsuccess = event => {
            imageDatabase = event.target.result; // Reuse the same variable name from gallery.js if possible
            resolve(imageDatabase);
        };

        dbOpenRequest.onerror = event => {
            console.error('Failed to open IndexedDB for credits:', event.target.errorCode);
            reject(event.target.errorCode);
        };
    });

    await databaseReady;
    updateUserCredits(0); // تحميل الرصيد المحفوظ
}

export async function updateUserCredits(change = 0) {
    await databaseReady;
    const transaction = imageDatabase.transaction('credits', 'readwrite');
    const store = transaction.objectStore('credits');
    const getRequest = store.get(1);

    getRequest.onsuccess = () => {
        let creditData = getRequest.result || { id: 1, credits: 100, lastReset: new Date().toISOString() };
        const now = new Date();
        const lastReset = new Date(creditData.lastReset);
        const diffHours = (now - lastReset) / (1000 * 60 * 60);

        if (diffHours >= 24) {
            // إعادة تعيين الرصيد إذا مر 24 ساعة
            creditData.credits = 100 + change;
            creditData.lastReset = now.toISOString();
            userCredits = creditData.credits;
        } else {
            // تحديث الرصيد الحالي
            creditData.credits = Math.max(0, creditData.credits + change);
            userCredits = creditData.credits;
        }

        // حفظ البيانات المحدثة
        store.put(creditData);
        updateCreditsUI(userCredits);
    };
}

function updateCreditsUI(credits) {
    const creditsCountElement = document.getElementById('creditsCount');
    if (creditsCountElement) {
        creditsCountElement.textContent = credits;
    }
}

// وظائف إدارة الإحصائيات
export async function updateStatistics(type, value = 1) {
    await databaseReady;
    const transaction = imageDatabase.transaction('statistics', 'readwrite');
    const store = transaction.objectStore('statistics');
    const getRequest = store.get(1);

    getRequest.onsuccess = () => {
        let stats = getRequest.result;
        if (!stats) {
            stats = { id: 1, totalGenerated: 0, totalSaved: 0, creditsUsed: 0, dailyUsage: 0 };
        }

        // تحديث الإحصائية
        stats[type] += value;

        // حساب معدل الاستخدام اليومي (مجرد مثال بسيط)
        const now = new Date();
        const hours = now.getHours();
        stats.dailyUsage = Math.min(100, Math.floor((hours / 24) * 100));

        // حفظ البيانات المحدثة
        store.put(stats);
    };
}

export async function loadStatistics() {
    await databaseReady;
    const transaction = imageDatabase.transaction('statistics', 'readonly');
    const store = transaction.objectStore('statistics');
    const getRequest = store.get(1);

    getRequest.onsuccess = () => {
        const stats = getRequest.result || { id: 1, totalGenerated: 0, totalSaved: 0, creditsUsed: 0, dailyUsage: 0 };

        // تحديث عناصر واجهة المستخدم
        const totalGenEl = document.getElementById('totalGeneratedCount');
        const totalSavedEl = document.getElementById('totalSavedCount');
        const creditsUsedEl = document.getElementById('creditsUsedCount');
        const dailyRateEl = document.getElementById('dailyUsageRate');

        if (totalGenEl) totalGenEl.textContent = stats.totalGenerated;
        if (totalSavedEl) totalSavedEl.textContent = stats.totalSaved;
        if (creditsUsedEl) creditsUsedEl.textContent = stats.creditsUsed;
        if (dailyRateEl) dailyRateEl.textContent = `${stats.dailyUsage}%`;

        // رسم المخطط إذا كان موجودًا
        renderUsageChart(stats);
    };
}

function renderUsageChart(stats) {
    const ctx = document.getElementById('usageChart');
    if (!ctx) return;

    if (window.usageChart) {
        window.usageChart.destroy();
    }

    window.usageChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['الصور المنشأة', 'المحفوظة', 'الرصيد المستخدم'],
            datasets: [{
                label: 'الإحصائيات',
                data: [stats.totalGenerated, stats.totalSaved, stats.creditsUsed],
                backgroundColor: [
                    'rgba(79, 70, 229, 0.7)',
                    'rgba(126, 34, 206, 0.7)',
                    'rgba(212, 175, 55, 0.7)'
                ],
                borderColor: [
                    'rgba(79, 70, 229, 1)',
                    'rgba(126, 34, 206, 1)',
                    'rgba(212, 175, 55, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}