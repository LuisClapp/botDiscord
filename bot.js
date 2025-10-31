require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require("discord.js");
const fs = require("fs");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

// Coleção para comandos
client.commands = new Collection();

// Carrega comandos
const commandFiles = fs.readdirSync('./commands').filter(f => f.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

// Eventos
client.once("ready", () => require("./events/ready")(client));
client.on("guildCreate", guild => require("./events/guildCreate")(guild, client));
client.on("guildDelete", guild => require("./events/guildDelete")(guild, client));
client.on("guildMemberAdd", member => require("./events/guildMemberAdd")(member));

// Interações (Slash Commands)
client.on("interactionCreate", async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'Ocorreu um erro ao executar esse comando!', ephemeral: true });
  }
});

// Login
client.login(process.env.TOKEN);
