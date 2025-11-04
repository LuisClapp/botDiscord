# 🤖 botDiscord

Um bot do Discord desenvolvido em **Node.js** com suporte a **Slash Commands**, **Event Handlers**, e **versionamento automatizado** com **Husky + Commitlint + Git Flow**.

---

## 🧩 Índice

- [📦 Tecnologias utilizadas](#-tecnologias-utilizadas)
- [🚀 Funcionalidades do bot](#-funcionalidades-do-bot)
  - [💬 Slash Commands](#-slash-commands)
  - [🧠 Integração com IA (OpenAI)](#-integração-com-ia-openai)
  - [🎉 Eventos](#-eventos)
- [⚙️ Estrutura do projeto](#️-estrutura-do-projeto)
- [🪄 Instalação e execução](#-instalação-e-execução)
- [🔐 Configuração do .env](#-configuração-do-env)
- [🌳 Fluxo de versionamento (Git Flow)](#-fluxo-de-versionamento-git-flow)
- [🧹 Husky + Commitlint](#-husky--commitlint)
- [🧾 Licença](#-licença)

---

## 📦 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [discord.js v14](https://discord.js.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [OpenAI API (GPT-5)](https://platform.openai.com/)
- [Husky](https://typicode.github.io/husky)
- [Commitlint](https://commitlint.js.org/)
- [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)
- [Standard Version](https://github.com/conventional-changelog/standard-version)

---

## 🚀 Funcionalidades do bot

### 💬 Commands

| Comando | Descrição | Exemplo de uso |
|----------|------------|----------------|
| `/ping` | Mostra o tempo de resposta do bot. | `🏓 Pong! Latência: 42ms` |
| `/beijo` | Dá um beijo em outro usuário e envia um gif aleatório. | `/beijo @Usuário` |
| `/abraco` | Envia um abraço carinhoso para outro usuário. | `/abraco @Amigo` |
| `/caraoucoroa` | Joga uma moeda e retorna **cara** ou **coroa**. | `/caraoucoroa` |
| `/dado` | Rola um dado e retorna um número aleatório de 1 a 6. | `/dado` |
| `/oi` | Cumprimenta o usuário. | `/oi` |
| `!ai` | Faz uma pergunta para a IA da OpenAI e recebe uma resposta inteligente. | `!ai prompt:"Explique o que é Node.js"` |

---

### 🎉 Eventos

O bot responde automaticamente a diversos eventos do Discord:

| Evento | Arquivo | Função |
|---------|----------|--------|
| `guildCreate` | `events/guildCreate.js` | Executado quando o bot entra em um novo servidor. Envia mensagem de boas-vindas no canal padrão. |
| `guildDelete` | `events/guildDelete.js` | Executado quando o bot é removido de um servidor. Registra o evento no console. |
| `guildMemberAdd` | `events/guildMemberAdd.js` | Envia mensagem de boas-vindas quando um novo membro entra no servidor. |
| `messageCreate` | `events/messageCreate.js` | Monitora mensagens enviadas no chat para respostas personalizadas (ex: “oi”, “tchau”, etc.). |
| `ready` | `events/ready.js` | Executado quando o bot é iniciado com sucesso. Mostra no console que está online. |

---

🪄 Instalação e execução
1️⃣ Clonar o repositório
git clone https://github.com/<seu-usuario>/botDiscord.git
cd botDiscord

2️⃣ Instalar dependências
npm install

3️⃣ Configurar variáveis de ambiente

Crie um arquivo .env na raiz com o seguinte conteúdo:

TOKEN=seu_token_do_discord
CLIENT_ID=id_do_bot
GUILD_ID=id_do_servidor_para_teste
OPENAI_API_KEY=sua_chave_da_openai


💡 Você pode obter sua OPENAI_API_KEY em https://platform.openai.com/account/api-keys

4️⃣ Registrar comandos no Discord
node deploy-commands.js

5️⃣ Iniciar o bot
node bot.js

🔐 Configuração do .env
Variável	Descrição
TOKEN	Token do bot obtido no Discord Developer Portal

🌳fluxo-de-versionamento-git-flow

O projeto segue o modelo Git Flow, com as seguintes branches principais:

Branch	Função
main	Código de produção estável.
develop	Integração de features antes da release.
feature/<nome>	Desenvolvimento de novas funcionalidades.
hotfix/<nome>	Correção rápida de bugs em produção.

🧹 Husky + Commitlint

O projeto usa Husky e Commitlint para padronizar commits no estilo Conventional Commits.


✅ Exemplos válidos
Tipo	Exemplo
feat	feat(commands): adiciona comando de IA com OpenAI
fix	fix(events): corrige saudação duplicada
chore	chore(deps): atualiza dependências

🧾 Licença
Este projeto é distribuído sob a licença MIT.
Desenvolvido com ❤️ por Luís Clapp.
