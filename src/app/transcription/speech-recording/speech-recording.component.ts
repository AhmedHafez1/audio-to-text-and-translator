import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import * as RecordRTC from 'recordrtc';
const WaveSurfer = require('wavesurfer.js');
@Component({
  selector: 'app-speech-recording',
  templateUrl: './speech-recording.component.html',
  styleUrls: ['./speech-recording.component.scss'],
})
export class SpeechRecordingComponent implements OnInit, AfterViewInit {
  @Output() speechRecorded: EventEmitter<Blob> = new EventEmitter();
  @ViewChild('waveform') waveform!: ElementRef<HTMLDivElement>;
  isRecording = false;
  private recordRTC: RecordRTC | null = null;
  private waveSurfer: any;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.waveSurfer = WaveSurfer.create({
      container: this.waveform.nativeElement,
      waveColor: 'violet',
      progressColor: 'purple',
    });
  }

  startRecording(): void {
    this.isRecording = true;

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        this.recordRTC = new RecordRTC(stream, {
          type: 'audio',
          mimeType: 'audio/wav',
          recorderType: RecordRTC.StereoAudioRecorder,
          numberOfAudioChannels: 1,
        });
        this.recordRTC.startRecording();
      })
      .catch((error) => {
        console.error('Error starting recording:', error);
      });
  }

  stopRecording(): void {
    this.isRecording = false;
    if (this.recordRTC) {
      this.recordRTC.stopRecording(() => {
        const audioBlob = this.recordRTC!.getBlob();
        if (audioBlob) {
          this.speechRecorded.emit(audioBlob);
        }
      });
    }
  }
}
