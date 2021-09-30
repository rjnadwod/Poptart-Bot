const { Client, Intents } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

bot.on('ready', () => {
    console.log("Poptart Bot is online!");
    bot.user.setActivity('Prefix is: . ', { type: "WATCHING"});
})

bot.on('error', console.error);

bot.login(process.env.DJS_TOKEN);