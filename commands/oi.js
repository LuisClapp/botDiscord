const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('oi')
    .setDescription('Cumprimenta o usuário 😄'),
  async execute(interaction) {
    const gifs = [
      "https://media.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif",
      "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
    ];
    const gif = gifs[Math.floor(Math.random() * gifs.length)];
    await interaction.reply({ content: `Oi, ${interaction.user.username}! 😄`, files: [gif] });
  }
};
