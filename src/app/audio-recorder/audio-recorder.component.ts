import { Component, OnInit } from '@angular/core';

import { AudioTranscriptionService } from '../audio-transcription.service';

@Component({
  selector: 'app-audio-recorder',
  templateUrl: './audio-recorder.component.html',
  styleUrls: ['./audio-recorder.component.css'],
})
export class AudioRecorderComponent implements OnInit {
  transcription: string | null = null;
  translation: string | null = null;
  selectedLanguages = {
    targetLanguage: 'ar',
    inputLanguage: 'en',
  };

  constructor(private audioTranscriptionService: AudioTranscriptionService) {}

  ngOnInit(): void {}

  getTranscriptionAndTranslation(audioBlop: Blob) {
    this.audioTranscriptionService
      .transcribeAndTranslateAudio(
        audioBlop,
        this.selectedLanguages.inputLanguage,
        this.selectedLanguages.targetLanguage
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
