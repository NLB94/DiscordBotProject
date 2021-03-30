const Discord = require('discord.js');

const client = new Discord.Client();

const { loadEvents, loadCommands } = require("./util/loader");

["commands", "cooldowns"].forEach(x => client[x] = new Discord.Collection());

loadCommands(client);
loadEvents(client);
 
client.login("ton_token");