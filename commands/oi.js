const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('oi')
    .setDescription('Cumprimenta o usuário 😄'),

  async execute(interaction) {
    try {
      // Avisa ao Discord que o bot está processando
      await interaction.deferReply();

      const gifs = [
        "https://media.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif",
        "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
      ];

      const gif = gifs[Math.floor(Math.random() * gifs.length)];

      // Edita a resposta após o defer
      await interaction.editReply({
        content: `👋 Oi, ${interaction.user.username}! 😄`,
        files: [gif]
      });

    } catch (error) {
      console.error("Erro no comando /oi:", error);

      // Se já respondeu/deferiu, usa followUp; senão reply
      if (interaction.deferred || interaction.replied) {
        await interaction.followUp({
          content: "⚠️ Ocorreu um erro ao executar o comando.",
          ephemeral: true
        });
      } else {
        await interaction.reply({
          content: "⚠️ Ocorreu um erro ao executar o comando.",
          ephemeral: true
        });
      }
    }
  }
};
