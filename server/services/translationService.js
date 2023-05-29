const { Translate } = require("@google-cloud/translate").v2;
const translate = new Translate({
  key: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});

async function detectLanguage(text) {
  try {
    const [detections] = await translate.detect(text);
    const detection = Array.isArray(detections) ? detections[0] : detections;
    return detection.language;
  } catch (error) {
    console.error("Error detecting language:", error);
  }
}

async function translateText(text, targetLanguage) {
  try {
    const [translation] = await translate.translate(text, targetLanguage);
  } catch (error) {
    console.error("Error translating text:", error);
  }
}

module.exports = { detectLanguage, translateText };
