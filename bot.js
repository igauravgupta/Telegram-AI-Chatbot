// https://t.me/express_AI_chatBot
require('dotenv').config()
const TelegramBot = require("node-telegram-bot-api")
const token = process.env.TOKEN;


//CONNECTING OPENAI
const {main}= require("./search")

// creating bot
const bot = new TelegramBot(token,{polling:true});

bot.on("message",(msg)=>{
    const chatID= msg.chat.id;
    console.log(msg);
    const reply =main(msg.text.toString());
    console.log(reply);
    bot.sendMessage(chatID,"hello");
})
