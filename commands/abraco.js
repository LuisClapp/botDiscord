const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('abraço')
    .setDescription('Dá um abraço em alguém')
    .addUserOption(option => 
      option.setName('alvo')
        .setDescription('Quem você quer abraçar')
        .setRequired(true)),
  async execute(interaction) {
    const target = interaction.options.getUser('alvo');
    const gifs = [
      "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
      "https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif"
    ];
    const gif = gifs[Math.floor(Math.random() * gifs.length)];
    await interaction.reply({ content: `🤗 ${interaction.user.username} deu um abraço em ${target.username}!`, files: [gif] });
  }
};
