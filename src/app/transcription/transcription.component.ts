import { Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AudioTranscriptionService } from '../audio-transcription.service';
import { Transcription } from './models/transcription';
import { TransOptions } from './models/trans-optiond';

@Component({
  selector: 'app-main',
  templateUrl: './transcription.component.html',
  styleUrls: ['./transcription.component.scss'],
})
export class TranscriptionComponent implements OnInit {
  transcription$!: Observable<Transcription>;
  transcriptionOptions: TransOptions = {
    targetLanguage: 'ar',
    inputLanguage: 'en',
    selectedInputMode: 'record',
    title: 'New Transcription',
  };

  constructor(private audioTranscriptionService: AudioTranscriptionService) {}

  ngOnInit(): void {}

  getTranscriptionAndTranslation(audioBlop: Blob) {
    const { inputLanguage, targetLanguage, title } = this.transcriptionOptions;
    this.transcription$ =
      this.audioTranscriptionService.transcribeAndTranslateAudio(
        audioBlop,
        inputLanguage,
        targetLanguage,
        title
      );
  }
}
