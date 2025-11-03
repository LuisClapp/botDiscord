const OpenAI = require("openai");
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function responderIA(mensagem) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // ou gpt-4-turbo
      messages: [{ role: "user", content: mensagem }],
      temperature: 0.8
    });

    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error("Erro na IA:", error);
    return "😔 Desculpe, não consegui pensar em uma resposta agora.";
  }
}

module.exports = { responderIA };
