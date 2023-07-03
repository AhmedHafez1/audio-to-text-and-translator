const { synthesizeSpeech } = require("../services/textToSpeechService");

const textToSpeech = async (req, res) => {
  const audioContent = await synthesizeSpeech(
    req.body.text,
    req.body.languageCode
  );
  res.set("Content-Type", "audio/mpeg");
  res.send(audioContent);
};

module.exports = { textToSpeech };
