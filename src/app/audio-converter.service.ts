import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AudioConverterService {
  private readonly apiUrl = '/api/convert/mp4';
  constructor(private http: HttpClient) {}

  convertToWav(inputFile: Blob): Observable<Blob> {
    const formData = new FormData();
    formData.append('file', inputFile);

    return this.http.post<Blob>(this.apiUrl, formData);
  }
}
