const { SlashCommandBuilder } = require("discord.js");
const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ai")
    .setDescription("Converse com a IA da OpenAI (somente no canal AI-Channel)")
    .addStringOption(option =>
      option
        .setName("prompt")
        .setDescription("Mensagem ou pergunta para a IA")
        .setRequired(true)
    ),
  async execute(interaction) {
    // Verifica se o comando foi executado no canal correto
    const allowedChannelName = "ai-channel"; // nome do canal permitido
    if (interaction.channel.name.toLowerCase() !== allowedChannelName) {
      return interaction.reply({
        content: `⚠️ Este comando só pode ser usado no canal **#${allowedChannelName}**.`,
        ephemeral: true, // só o usuário vê a mensagem
      });
    }

    const prompt = interaction.options.getString("prompt");
    await interaction.deferReply(); // dá tempo para a IA responder

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-5", // ou "gpt-4o-mini" se preferir
        messages: [{ role: "user", content: prompt }],
      });

      const response = completion.choices[0].message.content;

      await interaction.editReply(`💬 **IA responde:**\n${response}`);
    } catch (error) {
      console.error("Erro na API OpenAI:", error);
      await interaction.editReply(
        "⚠️ Ocorreu um erro ao tentar gerar a resposta da IA. Tente novamente mais tarde."
      );
    }
  },
};
