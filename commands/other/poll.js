const { MessageEmbed, Client, Message } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

/**
 * @param {Client} client 
 * @param {Message} message 
 * @param {String[]} args 
 */
module.exports.run = (client, message, args) => {
    message.delete();
    const embed = new MessageEmbed()
    .setTitle('New Poll')
    .setColor("#000000")
    .setDescription(`[Add I2Z7](https://discord.com/oauth2/authorize?client_id=735824367698837555&permissions=2146958847&response_type=code&scope=identify%20applications.commands%20bot%20guilds%20guilds.join) \n${args.join(" ")}`)
    .setFooter('I2Z7 Bot');
    
    message.channel.send(embed).then(async msg => {
    await msg.react('✅');
    await msg.react('〰️');
    await msg.react('❌');
}).catch(err => '');
};




module.exports.help = MESSAGES.COMMANDS.OTHER.POLL;