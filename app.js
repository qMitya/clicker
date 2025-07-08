document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter');
    const clickBtn = document.getElementById('clickBtn');
    const clickEffect = document.getElementById('clickEffect');
    
    let clicks = parseInt(localStorage.getItem('clicks')) || 0;
    counter.textContent = clicks;

    // Анимация клика
    function animateClick() {
        // Пульсация
        clickEffect.style.transform = 'scale(0.5)';
        clickEffect.style.opacity = '0.8';
        
        // Анимация эмодзи
        clickBtn.innerHTML = '🍟'; // Меняем на другой эмодзи при клике
        clickBtn.style.transform = 'scale(0.9) rotate(10deg)';
        
        setTimeout(() => {
            clickEffect.style.transform = 'scale(2)';
            clickEffect.style.opacity = '0';
            clickBtn.innerHTML = '🍔';
            clickBtn.style.transform = 'scale(1) rotate(0)';
        }, 200);
    }

    clickBtn.addEventListener('click', () => {
        clicks++;
        counter.textContent = clicks;
        localStorage.setItem('clicks', clicks.toString());
        animateClick();
    });

    // Инициализация Telegram WebApp
    if (window.Telegram?.WebApp?.ready) {
        Telegram.WebApp.expand();
        Telegram.WebApp.ready();
    }
});