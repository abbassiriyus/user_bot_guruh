

const TelegramBot = require('node-telegram-bot-api');

// Telegram bot API kaliti
const token = '6492572397:AAGmkt8yP7NrFhGwnUUJyxFwhlCcF1878Rs';

// Botni yaratish
const bot = new TelegramBot(token, { polling: true });

// Haqiqiy vaqtni olish
function getCurrentTime() {
    return new Date().toLocaleString();
  }
  
  // Botdan kelgan barcha xabarlar
  bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const senderName = msg.from.first_name;
    const messageText = msg.text;
    const currentTime = getCurrentTime();
  
    // Xabarni guruhdagi a'zolarga yuborish
    bot.sendMessage(chatId, `Yuboruvchi: ${senderName}\nXabar: ${messageText}\nVaqt: ${currentTime}`);
  });