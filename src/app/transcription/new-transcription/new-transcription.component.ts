import { Component, OnInit } from '@angular/core';
import { TransOptions } from '../models/trans-options';
import { AudioTranscriptionService } from '../transcription.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-transcription',
  templateUrl: './new-transcription.component.html',
  styleUrls: ['./new-transcription.component.scss'],
})
export class NewTranscriptionComponent implements OnInit {
  transcriptionOptions: TransOptions = {
    targetLanguage: 'ar',
    inputLanguage: 'en',
    selectedInputMode: 'record',
    title: 'New Transcription',
  };
  private audioBlop!: Blob;
  constructor(
    private audioTranscriptionService: AudioTranscriptionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  setAudioBlop(blop: Blob): void {
    this.audioBlop = blop;
  }

  getTranscriptionAndTranslation(): void {
    const { inputLanguage, targetLanguage, title } = this.transcriptionOptions;

    this.audioTranscriptionService
      .transcribeAndTranslateAudio(
        this.audioBlop,
        inputLanguage,
        targetLanguage,
        title
      )
      .subscribe((t) =>
        this.router.navigate(['/transcriptions', t._id], {
          queryParams: { allowEdit: true },
        })
      );
  }
}
