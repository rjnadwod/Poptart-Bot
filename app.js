require("dotenv").config();

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once("ready", () => {
    console.log("Poptart Bot is online!");
})

client.login(process.env.DS_TOKEN);