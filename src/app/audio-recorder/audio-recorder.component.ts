import { Component, OnInit } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import { AudioTranscriptionService } from '../audio-transcription.service';
import { LANGUAGES } from '../languages.constants';

@Component({
  selector: 'app-audio-recorder',
  templateUrl: './audio-recorder.component.html',
  styleUrls: ['./audio-recorder.component.css'],
})
export class AudioRecorderComponent implements OnInit {
  isRecording = false;
  transcription: string | null = null;
  translation: string | null = null;
  languages = LANGUAGES;
  targetLanguage: string = 'ar';
  inputLanguage: string = 'en';
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

  stopRecording(): void {
    this.isRecording = false;
    if (this.recordRTC) {
      this.recordRTC.stopRecording(() => {
        const audioBlop = this.recordRTC?.getBlob();
        if (audioBlop) {
          this.audioTranscriptionService
            .transcribeAndTranslateAudio(
              audioBlop,
              this.inputLanguage,
              this.targetLanguage
            )
            .subscribe({
              next: (response) => {
                this.transcription = response.transcription;
                this.translation = response.translation;
              },
              error: (error) =>
                console.error(
                  'Error transcribing and translating audio:',
                  error
                ),
            });
        }
      });
    }
  }
}
