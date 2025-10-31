const fs = require("fs");
const prefix = process.env.PREFIX || "!"; // prefixo do .env

module.exports = async (message, client) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const commandFiles = fs.readdirSync("./commands").filter(f => f.endsWith(".js"));

  for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    if (command.name === commandName) {
      command.execute(message, args);
      break;
    }
  }
};
