const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('dado')
    .setDescription('Rola um dado de 6 lados e mostra o resultado 🎲'),

  async execute(interaction) {
    // Envia mensagem inicial simulando a rolagem do dado
    await interaction.reply('🎲 Rolando o dado...');
    
    // Aguarda 1,5 segundo para criar suspense
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Gera um número aleatório entre 1 e 6
    const resultado = Math.floor(Math.random() * 6) + 1;

    // Frases dinâmicas baseadas no resultado
    const frases = [
      `O dado parou e... deu **${resultado}!** 😮`,
      `🎯 Caiu o número **${resultado}**! Boa jogada!`,
      `✨ O resultado é **${resultado}**!`,
      `O dado rolou longe e... **${resultado}!**`,
      `😄 Você tirou **${resultado}**! Será sorte ou destino?`,
      `💫 Número mágico: **${resultado}**!`
    ];

    // Escolhe uma resposta aleatória
    const mensagem = frases[Math.floor(Math.random() * frases.length)];

    // Edita a resposta inicial com o resultado final
    await interaction.editReply(mensagem);
  }
};
