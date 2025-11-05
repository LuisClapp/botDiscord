const fs = require("fs");
const prefix = process.env.PREFIX || "!"; // prefixo do .env

module.exports = async (message, client) => {
  if (message.author.bot) return; // ignora bots
  
  // Verifica se a mensagem começa com o prefixo
  if (!message.content.startsWith(prefix)) return;

  const prompt = message.content.slice(3).trim();

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const commandFiles = fs.readdirSync("./commands").filter(f => f.endsWith(".js"));

  // Evita comandos duplicados com Slash Commands
    const commandFile = commandFiles.find(f => {
  const cmd = require(`../commands/${f}`);
  return cmd.name === commandName;
});

  if (commandFile) {
  const command = require(`../commands/${commandFile}`);
  try {
      command.execute(message, args);
    } catch (error) {
    console.error(`Erro ao executar o comando ${commandName}:`, error);
    message.reply("⚠️ Ocorreu um erro ao executar este comando.");
    }
  }
};
