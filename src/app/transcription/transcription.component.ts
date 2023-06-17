import { Component, OnInit } from '@angular/core';
import { AudioTranscriptionService } from '../audio-transcription.service';

@Component({
  selector: 'app-main',
  templateUrl: './transcription.component.html',
  styleUrls: ['./transcription.component.scss'],
})
export class TranscriptionComponent implements OnInit {
  transcription: string | null = null;
  translation: string | null = null;
  selectedLanguagesOptions = {
    targetLanguage: 'ar',
    inputLanguage: 'en',
    selectedInputMode: 'record',
  };

  constructor(private audioTranscriptionService: AudioTranscriptionService) {}

  ngOnInit(): void {}

  getTranscriptionAndTranslation(audioBlop: Blob) {
    this.audioTranscriptionService
      .transcribeAndTranslateAudio(
        audioBlop,
        this.selectedLanguagesOptions.inputLanguage,
        this.selectedLanguagesOptions.targetLanguage
      )
      .subscribe({
        next: (response) => {
          this.transcription = response.transcription;
          this.translation = response.translation;
        },
        error: (error) =>
          console.error('Error transcribing and translating audio:', error),
      });
  }
}
