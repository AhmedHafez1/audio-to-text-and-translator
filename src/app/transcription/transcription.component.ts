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
  transcriptionId!: string;
  edit = false;

  constructor(
    private audioTranscriptionService: AudioTranscriptionService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.edit = !!this.activatedRoute.snapshot.queryParamMap.get('allowEdit');
    this.activatedRoute.paramMap.subscribe((params) => {
      this.transcriptionId = params.get('id')!;

      this.transcription$ = this.audioTranscriptionService.getTranscriptionById(
        this.transcriptionId
      );
    });
  }

  save(transcription: Transcription): void {
    this.audioTranscriptionService
      .editTranscriptionById(this.transcriptionId, transcription)
      .subscribe(() => (this.edit = false));
  }
}
