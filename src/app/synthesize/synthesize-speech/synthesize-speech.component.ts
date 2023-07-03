import { Component, OnInit } from '@angular/core';
import { SynthesizeService } from '../synthesize.service';
import { LANGUAGES } from 'src/app/languages.constants';

@Component({
  selector: 'app-synthesize-speech',
  templateUrl: './synthesize-speech.component.html',
  styleUrls: ['./synthesize-speech.component.scss'],
})
export class SynthesizeSpeechComponent {
  audioUrl!: string;
  text!: string;
  language: string = 'ar';
  languages = LANGUAGES;

  constructor(private synthesizeService: SynthesizeService) {}

  synthesizeSpeech() {
    this.synthesizeService
      .synthesize(this.text, this.language)
      .subscribe((response: Blob) => {
        const audioBlob = new Blob([response], { type: 'audio/mp3' });
        this.audioUrl = URL.createObjectURL(audioBlob);
      });
  }

  downloadAudio() {
    window.open(this.audioUrl);
  }
}
