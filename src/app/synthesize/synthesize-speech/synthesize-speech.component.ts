import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SynthesizeService } from '../synthesize.service';
import { LANGUAGES } from 'src/app/languages.constants';

@Component({
  selector: 'app-synthesize-speech',
  templateUrl: './synthesize-speech.component.html',
  styleUrls: ['./synthesize-speech.component.scss'],
})
export class SynthesizeSpeechComponent {
  @ViewChild('audioElement') audioElement!: ElementRef<HTMLAudioElement>;
  audioUrl: string = '';
  text: string = '';
  language: string = 'ar';
  languages = LANGUAGES;

  constructor(private synthesizeService: SynthesizeService) {}

  synthesizeSpeech() {
    this.synthesizeService
      .synthesize(this.text, this.language)
      .subscribe((response: Blob) => {
        const audioBlob = new Blob([response], { type: 'audio/mp3' });
        this.audioUrl = URL.createObjectURL(audioBlob);

        this.audioElement.nativeElement.src = this.audioUrl;
        this.audioElement.nativeElement.play();
      });
  }
}
