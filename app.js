const { Client, Intents } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
//const config = require('./config.json');

bot.on('ready', () => {
    console.log("Poptart Bot is online!");
    bot.user.setActivity('Prefix is: p. ', { type: "WATCHING"}).catch(console.error);
})

bot.on('error', console.error);

bot.login(process.env.DS_TOKEN);