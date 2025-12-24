export async function initTheme() {
    const body = document.body;
    const themeSwitch = document.getElementById('themeSwitch');
    const iconSun = document.getElementById('iconSun');
    const iconMoon = document.getElementById('iconMoon');

    if (!themeSwitch) return;

    // تحقق من الثيم المحفوظ
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    }
    updateThemeUI();

    themeSwitch.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
        updateThemeUI();
    });
}

function updateThemeUI() {
    const body = document.body;
    const iconSun = document.getElementById('iconSun');
    const iconMoon = document.getElementById('iconMoon');

    if (body.classList.contains('dark-mode')) {
        iconSun.style.display = 'none';
        iconMoon.style.display = 'inline';
    } else {
        iconSun.style.display = 'inline';
        iconMoon.style.display = 'none';
    }
}