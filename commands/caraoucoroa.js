const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('caraoucoroa')
    .setDescription('Joga cara ou coroa 🪙'),
  async execute(interaction) {
    const result = Math.random() < 0.5 ? 'Cara 🪙' : 'Coroa 🪙';
    await interaction.reply(`🎲 ${interaction.user.username} jogou: ${result}`);
  }
};
