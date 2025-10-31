module.exports = (member) => {
  const channel = member.guild.systemChannel; // canal padrão de boas-vindas
  if (!channel) return;

  channel.send(`🎉 Bem-vindo(a), ${member.user.username}! Divirta-se no servidor!`);
};
