let currentLanguage = 'ar';

const translations = {
    ar: {
        "mainTitle": "أنشئ صورًا <span class='gradient-text'>مذهلة</span>",
        "mainSubtitle": "حول أفكارك إلى صور رائعة باستخدام مولد الصور المتقدم. ما عليك سوى وصف ما تريد رؤيته.",
        "createTab": "إنشاء",
        "galleryTab": "المعرض",
        "tutorialTab": "التعليمات",
        "settingsTab": "الإعدادات",
        "promptPlaceholder": "أحضر فكرتك إلى الحياة...",
        "generateBtn": "إنشاء",
        "imageSettings": "إعدادات الصورة",
        "sizeLabel": "الحجم",
        "sizeSquare": "مربع",
        "sizeLandscape": "أفقي",
        "sizePortrait": "عمودي",
        "sizePanorama": "بانوراما",
        "sizeCinematic": "سينمائي",
        "sizeStory": "ستوري",
        "qualityLabel": "الجودة",
        "qualityMedium": "متوسطة",
        "qualityHigh": "عالية",
        "qualityUltra": "فائقة",
        "styleLabel": "النمط",
        "styleNone": "بدون",
        "saveBtn": "حفظ",
        "downloadBtn": "تنزيل",
        "galleryPlaceholder": "ستظهر أعمالك المحفوظة هنا",
        "tutorialTitle": "دليل البداية",
        "tutorialStep1": "صِف فكرتك",
        "tutorialStep1Desc": "اكتب فكرتك في صندوق الوصف. كن وصفيًا قدر الإمكان للحصول على أفضل النتائج.",
        "tutorialStep2": "اختر إعدادات الصورة",
        "tutorialStep2Desc": "حدد الحجم والجودة والنمط الفني لصورتك.",
        "tutorialStep3": "أنشئ وعدّل",
        "tutorialStep3Desc": "انقر على \"إنشاء\" وانتظر قليلاً. يمكنك تحسين وصفك والمحاولة مرة أخرى.",
        "tutorialStep4": "احفظ ونزّل",
        "tutorialStep4Desc": "احفظ أعمالك المفضلة في معرضك أو قم بتنزيلها.",
        "tutorialStep5": "استخدم الرصيد بحكمة",
        "tutorialStep5Desc": "الصور عالية الجودة تستهلك رصيدًا أكثر. تحصل على 100 رصيد يوميًا.",
        "tutorialStep6": "اشترِ البريميوم",
        "tutorialStep6Desc": "قم بالترقية للحصول على رصيد غير محدود، توليد أسرع وميزات مميزة.",
        "startCreatingBtn": "ابدأ الإنشاء الآن",
        "accountSettings": "إعدادات الحساب",
        "userName": "أيمن طه",
        "emailLabel": "البريد الإلكتروني:",
        "phoneLabel": "الهاتف:",
        "countryLabel": "البلد:",
        "usageSummary": "ملخص الاستخدام",
        "totalImages": "إجمالي الصور المنشأة",
        "savedInGallery": "محفوظ في المعرض",
        "creditsUsed": "الرصيد المستخدم",
        "dailyRate": "معدل الاستخدام اليومي",
        "creditsHeader": "الرصيد",
        "premiumBenefits": "فوائد البريميوم",
        "benefit1": "لا يوجد أوقات انتظار أو إعلانات",
        "benefit2": "جودة صور 4K فائقة الوضوح",
        "benefit3": "أولوية في طابور التوليد",
        "benefit4": "رصيد يومي غير محدود",
        "premiumPlanCard": "خطة البريميوم",
        "monthly": "/شهريًا",
        "premiumRefund": "يمكنك الإلغاء في أي وقت. ضمان استرداد الأموال لمدة 14 يومًا.",
        "upgradeNowBtn": "ترقية إلى البريميوم الآن",
        "supportText": "تحتاج مساعدة أو لديك ملاحظات؟",
        "contactSupport": "اتصل بالدعم",
        "privacyPolicy": "سياسة الخصوصية",
        "termsOfUse": "شروط الاستخدام",
        "aboutUs": "عنّا",
        "footerText": "مولد الصور المتقدم",
        "adTitle": "افتح ميزات البريميوم",
        "supportMessage": "دعمك يساعدنا على تحسين ATIGAI وإبقائه مجانيًا للجميع.",
        "premiumModalTitle": "افتح توليد عالي الجودة",
        "premiumModalText1": "توليد الصور عالية الجودة هو",
        "premiumFeature": "ميزة بريميوم",
        "premiumModalText2": "قم بترقية حسابك لإنشاء صور 4K مذهلة بتفاصيل فائقة الوضوح.",
        "ultraHd": "دقة فائقة الوضوح",
        "fasterGeneration": "توليد أسرع",
        "unlimitedCredits": "رصيد غير محدود",
        "continueNormal": "المتابعة بالجودة العادية",
        "upgradePremium": "ترقية إلى البريميوم",
        "insufficientTitle": "رصيدك غير كافي!",
        "insufficientText": "لقد استخدمت كل رصيدك اليومي. سيتجدد الرصيد بعد 24 ساعة أو يمكنك ترقية حسابك إلى البريميوم للحصول على رصيد غير محدود.",
        "insufficientClose": "إغلاق",
        "insufficientUpgrade": "ترقية إلى البريميوم",
        "generationErrorTitle": "فشل توليد الصورة",
        "generationErrorMessage": "حدث خطأ أثناء توليد الصورة. الرجاء المحاولة مرة أخرى لاحقًا.",
        "retryButton": "إعادة المحاولة",
        "galleryDeleteSuccess": "تم حذف الصورة من المعرض",
        "galleryDownloadSuccess": "تم تنزيل الصورة",
        "connectionErrorTitle": "فقدان الاتصال بالإنترنت",
        "watermarkRemoved": "تمت إزالة العلامة المائية",
        "watermarkError": "هذه الميزة متاحة فقط للمستخدمين المميزين",
        "enhanceEnabled": "تم تفعيل تحسين الوصف",
        "enhanceDisabled": "تم تعطيل تحسين الوصف",
        "fastEnabled": "تم تفعيل التوليد السريع",
        "fastDisabled": "تم تعطيل التوليد السريع",
        "generationDetails": "تفاصيل التوليد",
        "dateLabel": "التاريخ:"
    },
    en: {
        "mainTitle": "Create <span class='gradient-text'>Amazing</span> Images",
        "mainSubtitle": "Transform your ideas into stunning images using our advanced image generator. Just describe what you want to see.",
        "createTab": "Create",
        "galleryTab": "Gallery",
        "tutorialTab": "Tutorial",
        "settingsTab": "Settings",
        "promptPlaceholder": "Bring your idea to life...",
        "generateBtn": "Generate",
        "imageSettings": "Image Settings",
        "sizeLabel": "Size",
        "sizeSquare": "Square",
        "sizeLandscape": "Landscape",
        "sizePortrait": "Portrait",
        "sizePanorama": "Panorama",
        "sizeCinematic": "Cinematic",
        "sizeStory": "Story",
        "qualityLabel": "Quality",
        "qualityMedium": "Medium",
        "qualityHigh": "High",
        "qualityUltra": "Ultra",
        "styleLabel": "Style",
        "styleNone": "None",
        "saveBtn": "Save",
        "downloadBtn": "Download",
        "galleryPlaceholder": "Your saved works will appear here",
        "tutorialTitle": "Getting Started Guide",
        "tutorialStep1": "Describe Your Idea",
        "tutorialStep1Desc": "Write your idea in the description box. Be as descriptive as possible for the best results.",
        "tutorialStep2": "Choose Image Settings",
        "tutorialStep2Desc": "Select the size, quality, and artistic style for your image.",
        "tutorialStep3": "Generate and Edit",
        "tutorialStep3Desc": "Click 'Generate' and wait a moment. You can refine your description and try again.",
        "tutorialStep4": "Save and Download",
        "tutorialStep4Desc": "Save your favorite works to your gallery or download them.",
        "tutorialStep5": "Use Credits Wisely",
        "tutorialStep5Desc": "High-quality images consume more credits. You get 100 credits daily.",
        "tutorialStep6": "Buy Premium",
        "tutorialStep6Desc": "Upgrade to get unlimited credits, faster generation, and premium features.",
        "startCreatingBtn": "Start Creating Now",
        "accountSettings": "Account Settings",
        "userName": "Ayman Taha",
        "emailLabel": "Email:",
        "phoneLabel": "Phone:",
        "countryLabel": "Country:",
        "usageSummary": "Usage Summary",
        "totalImages": "Total Images Generated",
        "savedInGallery": "Saved in Gallery",
        "creditsUsed": "Credits Used",
        "dailyRate": "Daily Usage Rate",
        "creditsHeader": "Credits",
        "premiumBenefits": "Premium Benefits",
        "benefit1": "No waiting times or ads",
        "benefit2": "4K Ultra HD image quality",
        "benefit3": "Priority in generation queue",
        "benefit4": "Unlimited daily credits",
        "premiumPlanCard": "Premium Plan",
        "monthly": "/Monthly",
        "premiumRefund": "You can cancel anytime. 14-day money-back guarantee.",
        "upgradeNowBtn": "Upgrade to Premium Now",
        "supportText": "Need help or have feedback?",
        "contactSupport": "Contact Support",
        "privacyPolicy": "Privacy Policy",
        "termsOfUse": "Terms of Use",
        "aboutUs": "About Us",
        "footerText": "Advanced Image Generator",
        "adTitle": "Unlock Premium Features",
        "supportMessage": "Your support helps us improve ATIGAI and keep it free for everyone.",
        "premiumModalTitle": "Unlock High-Quality Generation",
        "premiumModalText1": "High-quality image generation is a",
        "premiumFeature": "Premium Feature",
        "premiumModalText2": "Upgrade your account to create stunning 4K images with ultra-detailed clarity.",
        "ultraHd": "Ultra HD Clarity",
        "fasterGeneration": "Faster Generation",
        "unlimitedCredits": "Unlimited Credits",
        "continueNormal": "Continue with Normal Quality",
        "upgradePremium": "Upgrade to Premium",
        "insufficientTitle": "Insufficient Credits!",
        "insufficientText": "You've used all your daily credits. Credits will reset after 24 hours or you can upgrade your account to premium for unlimited credits.",
        "insufficientClose": "Close",
        "insufficientUpgrade": "Upgrade to Premium",
        "generationErrorTitle": "Image Generation Failed",
        "generationErrorMessage": "An error occurred while generating the image. Please try again later.",
        "retryButton": "Retry",
        "galleryDeleteSuccess": "Image deleted from gallery",
        "galleryDownloadSuccess": "Image downloaded",
        "connectionErrorTitle": "Internet Connection Lost",
        "watermarkRemoved": "Watermark removed",
        "watermarkError": "This feature is available for premium users only",
        "enhanceEnabled": "Prompt enhancement enabled",
        "enhanceDisabled": "Prompt enhancement disabled",
        "fastEnabled": "Fast generation enabled",
        "fastDisabled": "Fast generation disabled",
        "generationDetails": "Generation Details",
        "dateLabel": "Date:"
    }
};

export function initLanguage() {
    // تحميل اللغة المحفوظة
    const savedLanguage = localStorage.getItem('language') || 'ar';
    setLanguage(savedLanguage);

    // معالجات أزرار تبديل اللغة
    document.querySelectorAll('.lang-btn').forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            document.querySelectorAll('.lang-btn').forEach(opt => {
                opt.classList.remove('active');
            });
            option.classList.add('active');
            setLanguage(lang);
            localStorage.setItem('language', lang);
        });
    });
}

function setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // تحديث النصوص في واجهة المستخدم
    Object.keys(translations[lang]).forEach(key => {
        const elements = document.querySelectorAll(`[data-i18n="${key}"]`);
        elements.forEach(element => {
            element.innerHTML = translations[lang][key];
        });
    });

    // تحديث placeholder للإدخال
    const promptInput = document.getElementById('promptInput');
    if (promptInput) {
        promptInput.placeholder = translations[lang]["promptPlaceholder"];
    }
}