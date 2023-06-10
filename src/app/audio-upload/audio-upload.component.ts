import { Component, EventEmitter, Output } from '@angular/core';
import * as ffmpeg from 'ffmpeg.js/ffmpeg-mp4';

@Component({
  selector: 'app-audio-upload',
  templateUrl: './audio-upload.component.html',
  styleUrls: ['./audio-upload.component.css'],
})
export class AudioUploadComponent {
  @Output() audioUploaded: EventEmitter<Blob> = new EventEmitter();

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const audioFile = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target && e.target.result) {
          const arrayBuffer = e.target.result as ArrayBuffer;
          this.convertMP4ToWAV(arrayBuffer);
        }
      };

      reader.readAsArrayBuffer(audioFile);
    }
  }

  private convertMP4ToWAV(arrayBuffer: ArrayBuffer): void {
    const ffmpegOptions = {
      MEMFS: [{ name: 'input.mp4', data: new Uint8Array(arrayBuffer) }],
      arguments: [
        '-i',
        'input.mp4',
        '-vn',
        '-acodec',
        'pcm_s16le',
        '-ar',
        '44100',
        '-ac',
        '1',
        'output.wav',
      ],
      print: () => {},
      printErr: () => {},
      onExit: (code: number) => {
        if (code === 0) {
          const wavFile = ffmpeg.FS('readFile', 'output.wav');
          const audioBlob = new Blob([wavFile.buffer], { type: 'audio/wav' });
          this.audioUploaded.emit(audioBlob);
        } else {
          console.error('Error converting MP4 to WAV:', code);
        }
      },
    };

    ffmpeg.run(ffmpegOptions);
  }
}
