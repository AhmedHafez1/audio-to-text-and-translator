const { synthesizeSpeech } = require("../services/textToSpeechService");

const textToSpeech = async (req, res) => {
  const audioContent = await synthesizeSpeech(req.body.text, req.body.language);
  res.set("Content-Type", "audio/mpeg");
  res.send(audioContent);
};

module.exports = { textToSpeech };
