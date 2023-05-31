import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AudioTranscriptionService {
  private readonly apiUrl = '/api/transcribe-translate';
  constructor(private http: HttpClient) {}

  public transcribeAndTranslateAudio(
    audioBlop: Blob,
    targetLanguage: string
  ): Observable<{ transcription: string; translation: string }> {
    const formData = new FormData();
    console.log(audioBlop);

    formData.append('audioBuffer', audioBlop, 'audio.wav');
    formData.append('encoding', 'LINEAR16');
    formData.append('sampleRateHertz', '48000');
    formData.append('languageCode', 'en-US');
    formData.append('targetLanguage', targetLanguage);

    return this.http.post<{ transcription: string; translation: string }>(
      this.apiUrl,
      formData
    );
  }
}
