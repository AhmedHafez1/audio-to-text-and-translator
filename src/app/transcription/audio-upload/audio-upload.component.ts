import { AudioConverterService } from '../../audio-converter.service';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
const WaveSurfer = require('wavesurfer.js');
@Component({
  selector: 'app-audio-upload',
  templateUrl: './audio-upload.component.html',
  styleUrls: ['./audio-upload.component.scss'],
})
export class AudioUploadComponent {
  @Output() audioUploaded: EventEmitter<Blob> = new EventEmitter();
  @ViewChild('waveform') waveform!: ElementRef<HTMLDivElement>;

  private waveSurfer: any;
  uploadedAudioBlob!: Blob;

  constructor() {}

  ngAfterViewInit(): void {
    this.waveSurfer = WaveSurfer.create({
      container: this.waveform.nativeElement,
      waveColor: 'violet',
      progressColor: 'purple',
    });
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const audioFile = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target && e.target.result) {
          const arrayBuffer = e.target.result as ArrayBuffer;
          this.uploadedAudioBlob = new Blob([arrayBuffer], {
            type: 'audio/wav',
          });
          this.loadWaveform();
          this.audioUploaded.emit(this.uploadedAudioBlob);
        }
      };

      reader.readAsArrayBuffer(audioFile);
    }
  }

  private loadWaveform() {
    this.waveSurfer.load(URL.createObjectURL(this.uploadedAudioBlob));
  }

  playWaveform() {
    this.waveSurfer.play();
  }
}
