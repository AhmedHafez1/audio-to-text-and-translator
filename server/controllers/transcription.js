const transcribeAudio = require("../services/speechToTextService");
const {
  detectLanguage,
  translateText,
} = require("../services/translationService");
const Transcription = require("../models/Transcription");
const User = require("../models/User");
const { BadRequest, NotFound, UnAuthorized } = require("../errors");
const { StatusCodes } = require("http-status-codes");

// Speech to text transcription
async function transcribeTranslate(req, res) {
  const { encoding, languageCode, targetLanguage, title } = req.body;
  const buffer = Buffer.from(req.file.buffer, "base64");

  // Transcribe the audio
  const transcriptionText = await transcribeAudio(
    buffer,
    encoding,
    languageCode
  );

  if (!transcriptionText)
    throw new BadRequest("Your voice is not clear. Please try again");

  // Detect the language of the transcription
  const detectedLanguage = await detectLanguage(transcriptionText);

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

  res.status(StatusCodes.CREATED).json({ transcription });
}

const getTranscriptions = async (req, res) => {
  const { userId } = req;

  const user = await User.findById(userId);

  if (!user) throw new UnAuthorized("You are not registered!");

  const transcriptions = await Transcription.find({});
  const count = transcriptions.length;

  if (!count) throw new NotFound("You don't have any transcriptions yet");

  res.status(StatusCodes.OK).json({ transcriptions, count });
};

const getTranscription = async (req, res) => {
  const { userId } = req;
  const { id } = req.params;

  const transcription = await Transcription.findOne({ _id: id, userId });

  if (!transcription) throw new NotFound("No transcriptions found!");

  res.status(StatusCodes.OK).json({ transcription });
};

const editTranscription = async (req, res) => {
  const { userId } = req;
  const { id } = req.params;
  const { transcription } = req.body;

  const editedTranscription = await Transcription.findOneAndUpdate(
    {
      _id: id,
      userId,
    },
    transcription,
    { new: true }
  );

  if (!editedTranscription)
    throw new NotFound("No transcriptions found to be edited");

  res.status(StatusCodes.OK).json(editedTranscription);
};

const deleteTranscription = async (req, res) => {
  const { userId } = req;
  const { id } = req.params;

  const transcription = await Transcription.findOneAndDelete({
    _id: id,
    userId,
  });

  if (!transcription)
    throw new NotFound("No transcriptions found to be deleted");

  res.status(StatusCodes.OK).json(true);
};

module.exports = {
  transcribeTranslate,
  getTranscriptions,
  deleteTranscription,
  editTranscription,
  getTranscription,
};
