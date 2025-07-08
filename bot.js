const { Telegraf } = require('telegraf');
const bot = new Telegraf('ВАШ_ТОКЕН_БОТА');

// Команда /start
bot.command('start', (ctx) => {
    ctx.reply('Добро пожаловать в кликер!', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: 'Открыть кликер',
                    web_app: { url: 'https://ваш-сайт.com/index.html' }
                }]
            ]
        }
    });
});

bot.launch();
console.log('Бот запущен!');