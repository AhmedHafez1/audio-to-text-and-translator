import { Component, OnInit } from '@angular/core';
import { Transcription } from '../models/transcription';

@Component({
  selector: 'app-transcription-list',
  templateUrl: './transcription-list.component.html',
  styleUrls: ['./transcription-list.component.scss'],
})
export class TranscriptionListComponent implements OnInit {
  transcriptions: Transcription[] = [
    {
      _id: '1',
      transcriptionText: 'Transcription 1',
      translationText: 'Translation 1',
      inputLanguage: 'English',
      targetLanguage: 'Spanish',
      createdDate: new Date(),
      title: 'Title 1',
      userId: 'user1',
    },
    {
      _id: '2',
      transcriptionText: 'Transcription 2',
      translationText: 'Translation 2',
      inputLanguage: 'English',
      targetLanguage: 'French',
      createdDate: new Date(),
      title: 'Title 2',
      userId: 'user2',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // Fetch transcriptions from API or initialize them here
  }
}
