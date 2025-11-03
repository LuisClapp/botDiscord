const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Mostra todos os comandos disponíveis do bot'),

  async execute(interaction) {
    // Embed bonito com cor e descrição
    const embed = new EmbedBuilder()
      .setColor(0x5865F2)
      .setTitle('🤖 Comandos disponíveis')
      .setDescription('Aqui estão todos os comandos que você pode usar com o bot:')
      .addFields(
        { name: '/ping', value: 'Verifica se o bot está online.' },
        { name: '/oi', value: 'O bot te cumprimenta 👋' },
        { name: '/dado', value: 'Rola um dado aleatório 🎲' },
        { name: '/caraoucoroa', value: 'Joga cara ou coroa 🪙' },
        { name: '/abracos', value: 'Envia um abraço 🤗' },
        { name: '/beijo', value: 'Envia um beijo 😘' }
      )
      .setFooter({ text: 'Use /help sempre que precisar 💡' });

    // Cria botões interativos
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel('Convidar o Bot')
        .setStyle(ButtonStyle.Link)
        .setURL('https://discord.com/oauth2/authorize?client_id=1433070872834609172&scope=bot%20applications.commands&permissions=8'),
      new ButtonBuilder()
        .setLabel('Servidor de Suporte')
        .setStyle(ButtonStyle.Link)
        .setURL('https://discord.gg/1188545496755744808')
    );

    // Envia a resposta com embed + botões
    await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
  },
};
