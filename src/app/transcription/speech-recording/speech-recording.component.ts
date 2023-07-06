import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import * as RecordRTC from 'recordrtc';
import { Observable, Subject, interval, map, takeUntil } from 'rxjs';
const WaveSurfer = require('wavesurfer.js');
@Component({
  selector: 'app-speech-recording',
  templateUrl: './speech-recording.component.html',
  styleUrls: ['./speech-recording.component.scss'],
})
export class SpeechRecordingComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Output() speechRecorded: EventEmitter<Blob> = new EventEmitter();
  @ViewChild('waveform') waveform!: ElementRef<HTMLDivElement>;
  isRecording = false;
  private recordRTC: RecordRTC | null = null;
  private waveSurfer: any;
  recordedAudioBlob!: Blob;
  public recordingTimer: number = 0;
  private destroy: Subject<void> = new Subject();
  timer$!: Observable<number>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.waveSurfer = WaveSurfer.create({
      container: this.waveform.nativeElement,
      waveColor: 'violet',
      progressColor: 'purple',
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  startRecording(): void {
    this.isRecording = true;
    this.timer$ = interval(1000)
      .pipe(map((v) => v + 1))
      .pipe(takeUntil(this.destroy));

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
    if (this.recordRTC) {
      this.recordRTC.stopRecording(() => {
        this.recordedAudioBlob = this.recordRTC!.getBlob();
        if (this.recordedAudioBlob) {
          this.loadWaveform();
          this.isRecording = false;
        }
      });
    }
  }

  private loadWaveform() {
    this.waveSurfer.load(URL.createObjectURL(this.recordedAudioBlob));
  }

  playWaveform() {
    this.waveSurfer.play();
    this.speechRecorded.emit(this.recordedAudioBlob);
  }
}
