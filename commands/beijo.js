const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('beijo')
    .setDescription('Dá um beijo em alguém 😘')
    .addUserOption(option =>
      option
        .setName('alvo')
        .setDescription('Quem vai receber o beijo')
        .setRequired(true)
    ),

  async execute(interaction) {
    const target = interaction.options.getUser('alvo');

    const gifs = [
      'https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif',
      'https://media.giphy.com/media/FqBTvSNjNzeZG/giphy.gif',
    ];

    const gif = gifs[Math.floor(Math.random() * gifs.length)];

    await interaction.reply({
      content: `😘 ${interaction.user.username} deu um beijo em ${target.username}!`,
      files: [gif],
    });
  },
};
