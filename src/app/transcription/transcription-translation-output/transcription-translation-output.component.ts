import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transcription-translation-output',
  templateUrl: './transcription-translation-output.component.html',
  styleUrls: ['./transcription-translation-output.component.scss'],
})
export class TranscriptionTranslationOutputComponent implements OnInit {
  @Input() transcription: string | null = null;
  @Input() translation: string | null = null;

  constructor() {}

  ngOnInit(): void {}
}
