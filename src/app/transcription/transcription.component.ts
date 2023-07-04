import { Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AudioTranscriptionService } from './transcription.service';
import { Transcription } from './models/transcription';
import { TransOptions } from './models/trans-optiond';
import { ActivatedRoute } from '@angular/router';

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
  transcriptionId: string | null = null;

  constructor(
    private audioTranscriptionService: AudioTranscriptionService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.transcriptionId = params.get('id');
      if (this.transcriptionId) {
        this.transcription$ =
          this.audioTranscriptionService.getTranscriptionById(
            this.transcriptionId
          );
      }
    });
  }

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
