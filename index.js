const { Client, GatewayIntentBits } = require("discord.js");
require('dotenv/config')

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

client.once('ready', () => {
    console.log("conected to discord");
})

client.login(process.env.DISCORD_TOKEN);