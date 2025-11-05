// utils/openaiClient.js
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function responderIA(prompt) {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Erro ao responder com a Gemini AI:", error);
    return "⚠️ Desculpe, ocorreu um erro ao gerar a resposta.";
  }
}

module.exports = { responderIA };
