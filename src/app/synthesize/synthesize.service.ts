import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SynthesizeService {
  private readonly apiUrl = '/api/synthesize';

  constructor(private http: HttpClient) {}

  synthesize(text: string, languageCode: string): Observable<Blob> {
    return this.http.post(
      this.apiUrl,
      { text, languageCode },
      { responseType: 'blob' }
    );
  }
}
