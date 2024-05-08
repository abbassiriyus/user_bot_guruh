

const TelegramBot = require('node-telegram-bot-api');

// Telegram bot API kaliti
const token = '6492572397:AAGmkt8yP7NrFhGwnUUJyxFwhlCcF1878Rs';

// Botni yaratish
const bot = new TelegramBot(token, { polling: true });

// Guruh identifikatori
const chatId = '-1002055646694';
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const username = msg.from.username;
    const messageText = msg.text;
    
    // Foydalanuvchidan olingan ma'lumotlarni ishlatish
    console.log(`Username: ${username}`);
    console.log(`Message: ${messageText}`);
    
    // Foydalanuvchiga javob yuborish
    bot.sendMessage(chatId, `Sizning xabaringizni qabul qildim.`);
  });
  