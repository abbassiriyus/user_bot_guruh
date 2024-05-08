

const TelegramBot = require('node-telegram-bot-api');

// Telegram bot API kaliti
const token = '6492572397:AAGmkt8yP7NrFhGwnUUJyxFwhlCcF1878Rs';

// Botni yaratish
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log(msg);
  // Guruhdagi foydalanuvchilarni aniqlash
  if (msg.chat.type === 'supergroup' || msg.chat.type === 'group') {
    bot.getChatMembersCount(chatId).then((count) => {
      // Guruhdagi foydalanuvchilar sonini olish
      console.log(`Guruhdagi foydalanuvchilar soni: ${count}`);
    });

    bot.getChatMembers(chatId).then((members) => {
      // Guruhdagi foydalanuvchilarni olish
      members.forEach((member) => {
        console.log(`Foydalanuvchi ID: ${member.user.id}, Ismi: ${member.user.first_name}`);
      });
    });
  }
});