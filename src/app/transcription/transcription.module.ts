import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioUploadComponent } from './audio-upload/audio-upload.component';
import { SelectInputWayComponent } from './select-input-way/select-input-way.component';
import { SelectLanguagesComponent } from './select-languages/select-languages.component';
import { SpeechRecordingComponent } from './speech-recording/speech-recording.component';
import { TranscriptionTranslationOutputComponent } from './transcription-translation-output/transcription-translation-output.component';
import { TranscriptionComponent } from './transcription.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TranscriptionComponent,
    AudioUploadComponent,
    SelectInputWayComponent,
    SelectLanguagesComponent,
    SpeechRecordingComponent,
    TranscriptionTranslationOutputComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class TranscriptionModule {}
