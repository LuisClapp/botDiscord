// commands/ai.js
const { SlashCommandBuilder } = require("discord.js");
const { askOpenAI } = require("../utils/openaiClient");

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
    const allowedChannelName = "ai-channel"; // canal autorizado

    if (interaction.channel.name.toLowerCase() !== allowedChannelName) {
      return interaction.reply({
        content: `⚠️ Este comando só pode ser usado no canal **#${allowedChannelName}**.`,
        ephemeral: true,
      });
    }

    const prompt = interaction.options.getString("prompt");
    await interaction.deferReply();

    try {
      const response = await askOpenAI(prompt);
      await interaction.editReply(`💬 **IA responde:**\n${response}`);
    } catch (error) {
      console.error("Erro ao processar comando /ai:", error);
      await interaction.editReply(
        "⚠️ Ocorreu um erro ao tentar gerar a resposta da IA. Tente novamente mais tarde."
      );
    }
  },
};
