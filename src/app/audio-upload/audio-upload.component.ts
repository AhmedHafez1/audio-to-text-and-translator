import { AudioConverterService } from './../audio-converter.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-audio-upload',
  templateUrl: './audio-upload.component.html',
  styleUrls: ['./audio-upload.component.css'],
})
export class AudioUploadComponent {
  @Output() audioUploaded: EventEmitter<Blob> = new EventEmitter();

  constructor(private audioConverterService: AudioConverterService) {}

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const audioFile = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target && e.target.result) {
          const arrayBuffer = e.target.result as ArrayBuffer;
          const audioBlob = new Blob([arrayBuffer], { type: 'audio/wav' });

          this.audioConverterService.convertToWav(audioBlob).subscribe({
            next: (wavFile) => this.audioUploaded.emit(wavFile),
            error: (error) => console.error(error),
          });
        }
      };

      reader.readAsArrayBuffer(audioFile);
    }
  }
}
