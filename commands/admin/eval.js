const { Client, Message } = require("discord.js");
const { MESSAGES } = require("../../util/constants");
 
/**
 * 
 * @param {Client} client 
 * @param {Message} message 
 * @param {String[]} args 
 */
module.exports.run = async (client, message, args) => {
  message.delete();
  function clean(text) {
    if (typeof text === "string") 
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    return text;
  }
  const owner = client.users.cache.get('ton_id');
  const code = args.join(" ");
  const evaled = eval(code);
  const cleanCode = await clean(evaled);
  if (code.includes("token")) {
  owner.send(cleanCode, { code: "js" });
  }
  else if (cleanCode) message.channel.send(cleanCode, { code: "js" });
};
 
module.exports.help = MESSAGES.COMMANDS.ADMIN.EVAL;