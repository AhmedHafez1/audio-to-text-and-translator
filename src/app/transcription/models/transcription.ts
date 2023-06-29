export interface Transcription {
  _id?: string;
  transcriptionText: string;
  translationText: string;
  inputLanguage: string;
  targetLanguage: string;
  createdDate?: Date;
  title: string;
  userId: string;
}
