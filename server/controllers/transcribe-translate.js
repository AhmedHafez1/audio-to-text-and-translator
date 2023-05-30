const transcribeAudio = require("../services/speechToTextService");
const {
  detectLanguage,
  translateText,
} = require("../services/translationService");

async function transcribeTranslate(req, res) {
  try {
    const { encoding, sampleRateHertz, languageCode, targetLanguage } =
      req.body;
    const buffer = Buffer.from(req.file.buffer, "base64");

    // Transcribe the audio
    const transcription = await transcribeAudio(
      buffer,
      encoding,
      sampleRateHertz,
      languageCode
    );

    // Detect the language of the transcription
    const detectedLanguage = await detectLanguage(transcription);

    // Translate the transcription to the target language
    const translation =
      detectedLanguage !== targetLanguage
        ? await translateText(transcription, targetLanguage)
        : transcription;

    res.json({ transcription, translation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = transcribeTranslate;
