import { AudioTranscriptionService as TranscriptionService } from '../transcription.service';
import { Component, OnInit } from '@angular/core';
import { Transcription } from '../models/transcription';
import { Observable, of, tap } from 'rxjs';

@Component({
  selector: 'app-transcription-list',
  templateUrl: './transcription-list.component.html',
  styleUrls: ['./transcription-list.component.scss'],
})
export class TranscriptionListComponent implements OnInit {
  transcriptions$: Observable<Transcription[]> =
    this.transcriptionService.transcriptions$;

  constructor(private transcriptionService: TranscriptionService) {}

  ngOnInit(): void {
    this.getTranscriptions();
  }

  getTranscriptions(): void {
    this.transcriptionService.getTranscriptions();
  }

  deleteTranscription(id: string): void {
    this.transcriptionService.deleteTranscription(id).subscribe();
  }
}
