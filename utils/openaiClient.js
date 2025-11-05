// utils/openaiClient.js
const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Envia uma mensagem para a API da OpenAI e retorna a resposta gerada.
 * @param {string} prompt - O texto da pergunta ou comando para a IA.
 * @returns {Promise<string>} - A resposta gerada pela IA.
 */
async function askOpenAI(prompt) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o", // ou "gpt-4o", caso prefira
      messages: [{ role: "user", content: prompt }],
    });

    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error("❌ Erro na integração com a OpenAI:", error);
    throw new Error("Não foi possível obter uma resposta da IA.");
  }
}

module.exports = { askOpenAI };
