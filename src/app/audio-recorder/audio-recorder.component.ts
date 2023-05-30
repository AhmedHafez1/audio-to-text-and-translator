import { Component, OnInit } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import { AudioTranscriptionService } from '../audio-transcription.service';

@Component({
  selector: 'app-audio-recorder',
  templateUrl: './audio-recorder.component.html',
  styleUrls: ['./audio-recorder.component.css'],
})
export class AudioRecorderComponent implements OnInit {
  isRecording = false;
  transcription: string | null = null;
  translation: string | null = null;
  private recordRTC: RecordRTC | null = null;

  constructor(private audioTranscriptionService: AudioTranscriptionService) {}

  ngOnInit(): void {}

  startRecording(): void {
    this.isRecording = true;
    this.transcription = null;
    this.translation = null;

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
}
