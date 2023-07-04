import { Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AudioTranscriptionService } from './transcription.service';
import { Transcription } from './models/transcription';
import { TransOptions } from './models/trans-options';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './transcription.component.html',
  styleUrls: ['./transcription.component.scss'],
})
export class TranscriptionComponent implements OnInit {
  transcription$!: Observable<Transcription>;
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
}
