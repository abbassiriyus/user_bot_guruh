

const TelegramBot = require('node-telegram-bot-api');

// Telegram bot API kaliti
const token = '6492572397:AAGmkt8yP7NrFhGwnUUJyxFwhlCcF1878Rs';

// const messageData = {
//     message_id: 2,
//     from: {
//       id: 1520593027,
//       is_bot: false,
//       first_name: '𝖆𝖇𝖇𝖆𝖘',
//       username: 'dsadsa111',
//       language_code: 'en'
//     },
//     chat: { id: , title: 'asda', type: 'supergroup' },
//     date: 1715151938,
//     text: 'salom'
//   };
  
  const chatId = -1002055646694;
  
 
  // Botni yaratish
  const bot = new TelegramBot(token, { polling: true });
  
  bot.getChatMembersCount(chatId).then((count) => {
    console.log(`Guruhdagi foydalanuvchilar soni: ${count}`);
  });
  
  bot.getChatMembers(chatId).then((members) => {
    let userBotCount = 0;
  
    members.forEach((member) => {
      if (member.username && member.username.toLowerCase().includes('_bot')) {
        userBotCount++;
      }
    });
  
    console.log(`"${messageData.chat.title}" guruhida ${userBotCount} ta "user_bot" mavjud.`);
  });