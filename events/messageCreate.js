const fs = require("fs");
const prefix = process.env.PREFIX || "!"; // prefixo do .env
const { responderIA } = require('../utils/ai');

module.exports = async (message, client) => {
  if (message.author.bot) return; // ignora bots
  if (!message.content.startsWith('!ai')) return; // só responde a !ai

  const prompt = message.content.slice(3).trim();

  if (!prompt) {
    await message.reply("✏️ Você precisa digitar algo depois do comando `!ai`, por exemplo:\n`!ai me conte uma curiosidade sobre o espaço`");
    return;
  }

  try {
    // Mostra que o bot está "digitando"
    await message.channel.sendTyping();   

    // Chama a função de resposta da IA
    const resposta = await responderIA(prompt);

    await message.reply(resposta);
  } catch (error) {
    console.error("Erro ao responder com a IA:", error);
    await message.reply("⚠️ Ocorreu um erro ao tentar conversar com a IA. Tente novamente mais tarde.");
  };

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
