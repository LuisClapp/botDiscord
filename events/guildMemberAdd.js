module.exports = (member) => {
  const channel = member.guild.systemChannel; // canal padrão de boas-vindas
  if (!channel) return;

  const mensagens = [
    `🎉 Bem-vindo(a) ao servidor, ${member}! Esperamos que se divirta!`,
    `👋 Olha quem chegou! ${member} entrou no servidor!`,
    `😄 E aí, ${member}! Seja bem-vindo(a)!`
  ];

  const mensagem = mensagens[Math.floor(Math.random() * mensagens.length)];
  channel.send(mensagem);
};

