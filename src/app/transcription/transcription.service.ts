import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';
import { Transcription } from './models/transcription';

@Injectable({
  providedIn: 'root',
})
export class AudioTranscriptionService {
  private transcriptionSubject = new BehaviorSubject<Transcription[]>([]);
  public transcriptions$ = this.transcriptionSubject.asObservable();

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

  getTranscriptions(): void {
    this.http
      .get<{ transcriptions: Transcription[]; count: number }>(this.apiUrl)
      .pipe(map((res) => this.transcriptionSubject.next(res.transcriptions)))
      .subscribe();
  }

  deleteTranscription(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        this.transcriptionSubject.next(
          this.transcriptions.filter((t) => t._id !== id)
        );
      })
    );
  }

  get transcriptions(): Transcription[] {
    return this.transcriptionSubject.value;
  }
}
