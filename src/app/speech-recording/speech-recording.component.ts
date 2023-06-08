import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as RecordRTC from 'recordrtc';
@Component({
  selector: 'app-speech-recording',
  templateUrl: './speech-recording.component.html',
  styleUrls: ['./speech-recording.component.css'],
})
export class SpeechRecordingComponent implements OnInit {
  @Output() speechRecorded: EventEmitter<Blob> = new EventEmitter();
  isRecording = false;
  private recordRTC: RecordRTC | null = null;

  constructor() {}

  ngOnInit(): void {}

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
        const audioBlop = this.recordRTC?.getBlob();
        if (audioBlop) {
          this.speechRecorded.emit(audioBlop);
        }
      });
    }
  }
}
