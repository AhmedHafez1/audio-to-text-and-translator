const textToSpeech = require("@google-cloud/text-to-speech");
const client = new textToSpeech.TextToSpeechClient();

exports.synthesizeSpeech = async (text, languageCode) => {
  const request = {
    audioConfig: {
      audioEncoding: "MP3",
    },
    input: {
      text,
    },
    voice: {
      languageCode,
    },
  };

  const [response] = await client.synthesizeSpeech(request);
  return response.audioContent;
};
