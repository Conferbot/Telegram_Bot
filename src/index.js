const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const TOKEN = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", (message) => {
  const chatId = message.chat.id;
  bot.sendMessage(chatId, "Hey Buddy How can i Help u?...");
  console.log(message.text);
});
