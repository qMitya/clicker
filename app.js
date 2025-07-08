const counter = document.getElementById('counter');
const clickBtn = document.getElementById('clickBtn');

// Загружаем клики и защищаемся от некорректных значений
let clicks = parseInt(localStorage.getItem('clicks')) || 0;
if (!isFinite(clicks)) clicks = 0; // Если вдруг Infinity, сбрасываем

function updateCounter() {
    // Проверка на максимальное значение (например, 1 млн)
    if (clicks > 1_000_000) {
        counter.textContent = "Много!";
        return;
    }
    counter.textContent = clicks;
    localStorage.setItem('clicks', clicks.toString());
}

clickBtn.addEventListener('click', () => {
    // Защита от переполнения
    if (clicks < Number.MAX_SAFE_INTEGER) {
        clicks++;
        updateCounter();
    }
});

// Инициализация
Telegram.WebApp.expand();
Telegram.WebApp.ready();
updateCounter();