import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { Transcription } from './transcription/models/transcription';

@Injectable({
  providedIn: 'root',
})
export class AudioTranscriptionService {
  private readonly apiUrl = '/api/transcribe-translate';
  constructor(private http: HttpClient) {}

  public transcribeAndTranslateAudio(
    audioBlop: Blob,
    inputLanguage: string,
    targetLanguage: string,
    title: string
  ): Observable<Transcription> {
    const formData = new FormData();

    console.log(audioBlop);

    formData.append('audioBuffer', audioBlop, 'audio.wav');
    formData.append('encoding', 'LINEAR16');
    formData.append('languageCode', inputLanguage);
    formData.append('targetLanguage', targetLanguage);
    formData.append('title', title);

    return this.http
      .post<{ transcription: Transcription }>(this.apiUrl, formData)
      .pipe(map((res) => res.transcription));
  }
}
