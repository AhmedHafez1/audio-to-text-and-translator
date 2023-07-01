import { Component, OnInit } from '@angular/core';
import { Transcription } from '../models/transcription';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transcription-list',
  templateUrl: './transcription-list.component.html',
  styleUrls: ['./transcription-list.component.scss'],
})
export class TranscriptionListComponent implements OnInit {
  transcriptions$!: Observable<Transcription[]>;

  constructor() {}

  ngOnInit(): void {
    // Fetch transcriptions from API or initialize them here
  }
}
