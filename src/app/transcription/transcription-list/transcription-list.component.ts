import { AudioTranscriptionService as TranscriptionService } from '../transcription.service';
import { Component, OnInit } from '@angular/core';
import { Transcription } from '../models/transcription';
import { Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transcription-list',
  templateUrl: './transcription-list.component.html',
  styleUrls: ['./transcription-list.component.scss'],
})
export class TranscriptionListComponent implements OnInit {
  transcriptions$: Observable<Transcription[]> =
    this.transcriptionService.transcriptions$;

  constructor(
    private transcriptionService: TranscriptionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTranscriptions();
  }

  getTranscriptions(): void {
    this.transcriptionService.getTranscriptions();
  }

  deleteTranscription(id: string): void {
    this.transcriptionService.deleteTranscription(id).subscribe();
  }

  editTranscription(id: string): void {
    this.router.navigateByUrl(`/transcriptions/${id}`);
  }
}
