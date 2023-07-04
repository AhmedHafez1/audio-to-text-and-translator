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
  constructor(
    private audioTranscriptionService: AudioTranscriptionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  getTranscriptionAndTranslation(audioBlop: Blob): void {
    const { inputLanguage, targetLanguage, title } = this.transcriptionOptions;

    this.audioTranscriptionService
      .transcribeAndTranslateAudio(
        audioBlop,
        inputLanguage,
        targetLanguage,
        title
      )
      .subscribe((t) => this.router.navigateByUrl('/transcriptions/' + t._id));
  }
}
