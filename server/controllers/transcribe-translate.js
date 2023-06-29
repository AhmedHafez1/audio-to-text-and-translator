const transcribeAudio = require("../services/speechToTextService");
const {
  detectLanguage,
  translateText,
} = require("../services/translationService");
const Transcription = require("../models/Transcription");

async function transcribeTranslate(req, res) {
  try {
    const { encoding, languageCode, targetLanguage, title } = req.body;
    const buffer = Buffer.from(req.file.buffer, "base64");

    // Transcribe the audio
    const transcriptionText = await transcribeAudio(
      buffer,
      encoding,
      languageCode
    );

    // Detect the language of the transcription
    const detectedLanguage = await detectLanguage(transcriptionText);

    console.log(detectedLanguage, targetLanguage);
    // Translate the transcription to the target language
    const translationText =
      detectedLanguage !== targetLanguage
        ? await translateText(transcriptionText, targetLanguage)
        : transcriptionText;

    // Save to database
    const transcription = new Transcription({
      title,
      transcriptionText,
      translationText,
      inputLanguage: languageCode,
      targetLanguage,
      userId: req.userId,
    });
    await transcription.save();

    res.json({ transcription });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = transcribeTranslate;
