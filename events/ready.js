module.exports = (client) => {
  console.log(`Bot iniciado, com ${client.users.cache.size} usuários, em ${client.channels.cache.size} canais, em ${client.guilds.cache.size} servidores.`);
  client.user.setActivity(`Eu estou em ${client.guilds.cache.size} servidores`);
  const statuses = [
    '✨ Ajudando no servidor!',
    '🎮 Use /help para ver meus comandos!',
    '🧠 Sempre aprendendo coisas novas!',
  ];

  let i = 0;
  setInterval(() => {
    client.user.setPresence({
      activities: [{ name: statuses[i], type: 0 }],
      status: 'online'
    });
    i = (i + 1) % statuses.length;
  }, 10000); // muda a cada 10 segundos
};
