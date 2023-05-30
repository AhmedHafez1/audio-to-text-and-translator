const speech = require("@google-cloud/speech");
const client = new speech.SpeechClient();

async function transcribeAudio(
  audioBuffer,
  encoding,
  sampleRateHertz,
  languageCode
) {
  const request = {
    audio: {
      content: audioBuffer.toString("base64"),
    },
    config: {
      encoding,
      sampleRateHertz,
      languageCode,
    },
  };

  try {
    const [response] = await client.recognize(request);
    const transcription = response.results
      .map((result) => result.alternatives[0].transcript)
      .join("\n");
    return transcription;
  } catch (error) {
    console.error("Error transcribing audio:", error);
    throw error;
  }
}

module.exports = transcribeAudio;
