import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SynthesizeSpeechComponent } from './synthesize-speech/synthesize-speech.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [SynthesizeSpeechComponent],
  imports: [CommonModule, FormsModule, AngularMaterialModule],
})
export class SynthesizeModule {}
