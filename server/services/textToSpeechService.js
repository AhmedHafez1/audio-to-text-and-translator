const textToSpeech = require("@google-cloud/text-to-speech");

exports.synthesizeSpeech = async (text, languageCode) => {
  const request = {
    input: { text: text },
    voice: { languageCode, ssmlGender: "NEUTRAL" },
    audioConfig: { audioEncoding: "MP3" },
  };

  const [response] = await textToSpeech.synthesizeSpeech(request);
  return response.audioContent;
};
