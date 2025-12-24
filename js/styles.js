export function initStyles() {
    const styleCategories = [
        { id: "nature", name: { en: "Nature", ar: "طبيعة" }, styles: [
            { id: "sunset", name: { en: "Sunset", ar: "غروب الشمس" }, image: "https://github.com/aymantaha3345/atigai.photos/blob/main/sunset.png?raw=true" },
            { id: "mountain-peaks", name: { en: "Mountain Peaks", ar: "قمم الجبال" }, image: "https://github.com/aymantaha3345/atigai.photos/blob/main/mountains%20peaks.png?raw=true" },
            { id: "forest-mist", name: { en: "Forest Mist", ar: "ضباب الغابة" }, image: "https://github.com/aymantaha3345/atigai.photos/blob/main/firest%20mist.png?raw=true" },
            { id: "desert-dunes", name: { en: "Desert Dunes", ar: "كثبان الصحراء" }, image: "https://github.com/aymantaha3345/atigai.photos/blob/main/desert%20dunes.png?raw=true" },
            { id: "autumn-leaves", name: { en: "Autumn Leaves", ar: "أوراق الخريف" }, image: "https://github.com/aymantaha3345/atigai.photos/blob/main/atumn%20leaves.png?raw=true" },
            { id: "spring-blossoms", name: { en: "Spring Blossoms", ar: "أزهار الربيع" }, image: "https://github.com/aymantaha3345/atigai.photos/blob/main/spring%20blossoms.png?raw=true" },
            { id: "winter-frost", name: { en: "Winter Frost", ar: "صقيع الشتاء" }, image: "https://github.com/aymantaha3345/atigai.photos/blob/main/winter%20frost.png?raw=true" },
            { id: "tropical-paradise", name: { en: "Tropical Paradise", ar: "جنة استوائية" }, image: "https://github.com/aymantaha3345/atigai.photos/blob/main/tropical%20paradise.png?raw=true" },
        ]},
        { id: "artistic", name: { en: "Artistic", ar: "فني" }, styles: [
            { id: "oil-painting", name: { en: "Oil Painting", ar: "لوحة زيتية" }, image: "https://github.com/aymantaha3345/atigai.photos/blob/main/oil%20painting.png?raw=true" },
            { id: "watercolor", name: { en: "Watercolor", ar: "ألوان مائية" }, image: "https://github.com/aymantaha3345/atigai.photos/blob/main/watercolor.png?raw=true" },
            { id: "pencil-sketch", name: { en: "Pencil Sketch", ar: "رسمة قلم رصاص" }, image: "https://github.com/aymantaha3345/atigai.photos/blob/main/pencil%20sketch.png?raw=true" },
            { id: "digital-art", name: { en: "Digital Art", ar: "فني رقمي" }, image: "https://github.com/aymantaha3345/atigai.photos/blob/main/digital%20art.png?raw=true" },
            { id: "impressionism", name: { en: "Impressionism", ar: "انطباعية" }, image: "https://github.com/aymantaha3345/atigai.photos/blob/main/impressionism.png?raw=true" },
            { id: "surrealism", name: { en: "Surrealism", ar: "سوريالية" }, image: "https://github.com/aymantaha3345/atigai.photos/blob/main/surrealism.png?raw=true" },
            { id: "cubism", name: { en: "Cubism", ar: "تكعيبية" }, image: "https://github.com/aymantaha3345/atigai.photos/blob/main/cubism.png?raw=true" },
            { id: "pop-art", name: { en: "Pop Art", ar: "بوب أرت" }, image: "https://github.com/aymantaha3345/atigai.photos/blob/main/pop%20art.png?raw=true" },
        ]},
        { id: "photography", name: { en: "Photography", ar: "تصوير فوتوغرافي" }, styles: [
            { id: "black-white", name: { en: "Black & White", ar: "أسود وأبيض" }, image: "https://github.com/aymantaha3345/atigai.photos/blob/main/black%20and%20white.png?raw=true" },
            { id: "vintage", name: { en: "Vintage", ar: "قديم الطراز" }, image: "https://github.com/aymantaha3345/atigai.photos/blob/main/vintage.png?raw=true" },
            { id: "portrait", name: { en: "Portrait", ar: "بورتريه" }, image: "https://github.com/aymantaha3345/atigai.photos/blob/main/portrait.png?raw=true" },
            { id: "landscape", name: { en: "Landscape", ar: "منظر طبيعي" }, image: "https://github.com/aymantaha3345/atigai.photos/blob/main/landscape.png?raw=true" },
            { id: "macro", name: { en: "Macro", ar: "ماكرو" }, image: "https://github.com/aymantaha3345/atigai.photos/blob/main/macro.png?raw=true" },
            { id: "street", name: { en: "Street", ar: "شوارع" }, image: "https://github.com/aymantaha3345/atigai.photos/blob/main/street%20photography.png?raw=true" },
            { id: "aerial", name: { en: "Aerial", ar: "جوي" }, image: "https://github.com/aymantaha3345/atigai.photos/blob/main/aerial.png?raw=true" },
            { id: "night", name: { en: "Night", ar: "ليلي" }, image: "https://github.com/aymantaha3345/atigai.photos/blob/main/night%20photography.png?raw=true" },
        ]}
    ];

    const styleDescriptions = {
        "sunset": {
            arabic: "أفق ملون بظلال برتقالية وحمراء",
            english: "Colorful horizon with orange and red hues"
        },
        "mountain-peaks": {
            arabic: "قمم جبلية مغطاة بالثلوج",
            english: "Snow-capped mountain peaks"
        },
        "forest-mist": {
            arabic: "غابة مغطاة بالضباب والهدوء",
            english: "Misty and serene forest"
        },
        "oil-painting": {
            arabic: "تأثير لوحة زيتية كلاسيكية",
            english: "Classic oil painting effect"
        },
        "digital-art": {
            arabic: "أعمال فنية رقمية معاصرة",
            english: "Contemporary digital art"
        },
        "black-white": {
            arabic: "صورة فوتوغرافية بالأبيض والأسود",
            english: "Black and white photographic style"
        }
        // Add more descriptions as needed
    };

    setupStyleOptions(styleCategories, styleDescriptions);
}

function setupStyleOptions(styleCategories, styleDescriptions) {
    const styleOptionsContainer = document.getElementById('styleOptions');
    const modalStyleOptions = document.getElementById('modalStyleOptions');

    if (!styleOptionsContainer || !modalStyleOptions) return;

    styleOptionsContainer.innerHTML = '';
    modalStyleOptions.innerHTML = '';

    // إضافة خيار "بدون"
    const noneStyle = document.createElement('div');
    noneStyle.className = 'style-option selected flex-shrink-0 rounded-lg overflow-hidden w-24 h-24 flex flex-col';
    noneStyle.setAttribute('data-style', 'none');
    noneStyle.innerHTML = `<div class="h-16 bg-gradient-to-br from-gray-700 to-gray-900"></div><div class="p-2 text-center"><span class="text-sm">بدون</span></div>`;
    styleOptionsContainer.appendChild(noneStyle);

    styleCategories.forEach(category => {
        category.styles.forEach(style => {
            // للقائمة الرئيسية
            const styleOption = document.createElement('div');
            styleOption.className = 'style-option flex-shrink-0 rounded-lg overflow-hidden w-24 h-24 flex flex-col';
            styleOption.setAttribute('data-style', style.id);
            styleOption.innerHTML = `<div class="h-16 bg-cover bg-center" style="background-image: url('${style.image}')"></div><div class="p-2 text-center"><span class="text-sm">${style.name.ar || style.name.en}</span></div>`;
            styleOptionsContainer.appendChild(styleOption);

            // للنافذة المنبثقة
            const modalStyleOption = document.createElement('div');
            modalStyleOption.className = 'cursor-pointer bg-gray-800 hover:bg-gray-700 transition p-3 rounded-xl flex flex-col items-center text-center';
            modalStyleOption.setAttribute('data-style', style.id);
            modalStyleOption.innerHTML = `
                <img src="${style.image}" alt="${style.name.ar || style.name.en}" class="w-full h-48 object-cover rounded-lg shadow mb-3" />
                <h3 class="text-lg font-semibold text-white truncate w-full">${style.name.ar || style.name.en}</h3>
                <p class="text-sm text-gray-400 mt-2">${styleDescriptions[style.id]?.arabic || styleDescriptions[style.id]?.english || 'لا يوجد وصف متاح'}</p>
            `;
            modalStyleOptions.appendChild(modalStyleOption);

            // عند اختيار نمط في النافذة المنبثقة
            modalStyleOption.addEventListener('click', () => {
                // تحديد النمط في القائمة الرئيسية
                document.querySelectorAll('.style-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                const mainStyleOption = document.querySelector(`.style-option[data-style="${style.id}"]`);
                if (mainStyleOption) {
                    mainStyleOption.classList.add('selected');
                }
                // إغلاق النافذة المنبثقة
                closeStyleModal();
            });
        });
    });

    // إضافة معالج الأحداث لاختيار الأنماط
    document.querySelectorAll('.style-option').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.style-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            option.classList.add('selected');
        });
    });
}

export function openStyleModal() {
    const modal = document.getElementById('styleModal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

export function closeStyleModal() {
    const modal = document.getElementById('styleModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}