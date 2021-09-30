const { Client, Intents } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const deploy = require('./deploy-commands');
require('dotenv').config();

bot.on('ready', () => {
    console.log("Poptart Bot is online!");
    bot.user.setActivity('Use "/" for commands!', { type: "PLAYING"});
    console.log("Activity set");
})

deploy.deployCommands();

bot.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'ping') {
		await interaction.reply('Pong!');
	}

    if (interaction.commandName === 'beep') {
		await interaction.reply('Boop!');
	}
});

bot.on('error', console.error);

bot.login(process.env.DJS_TOKEN);