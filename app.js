require("dotenv").config();

const { Client, Intents } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

bot.on('ready', () => {
    console.log("Poptart Bot is online!");
    bot.user.setStatus('In Development', {type: 'PLAYING'});
})

bot.on('error', console.error);

bot.login(process.env.DS_TOKEN);