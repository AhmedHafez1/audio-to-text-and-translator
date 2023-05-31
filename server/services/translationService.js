const { Translate } = require("@google-cloud/translate").v2;
const translate = new Translate({
  key: process.env.GOOGLE_API_KEY,
});

async function detectLanguage(text) {
  try {
    const [detections] = await translate.detect(text);
    const detection = Array.isArray(detections) ? detections[0] : detections;
    return detection.language;
  } catch (error) {
    console.error("Error detecting language:", error);
    throw error;
  }
}

async function translateText(text, targetLanguage) {
  try {
    const [translation] = await translate.translate(text, targetLanguage);
    return translation;
  } catch (error) {
    console.error("Error translating text:", error);
    throw error;
  }
}

module.exports = { detectLanguage, translateText };
