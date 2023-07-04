import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioUploadComponent } from './audio-upload/audio-upload.component';
import { SelectInputWayComponent } from './select-input-way/select-input-way.component';
import { SelectLanguagesComponent } from './select-languages/select-languages.component';
import { SpeechRecordingComponent } from './speech-recording/speech-recording.component';
import { TranscriptionComponent } from './transcription.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { TranscriptionListComponent } from './transcription-list/transcription-list.component';
import { NewTranscriptionComponent } from './new-transcription/new-transcription.component';

@NgModule({
  declarations: [
    TranscriptionComponent,
    AudioUploadComponent,
    SelectInputWayComponent,
    SelectLanguagesComponent,
    SpeechRecordingComponent,
    TranscriptionListComponent,
    NewTranscriptionComponent,
  ],
  imports: [CommonModule, FormsModule, AngularMaterialModule],
})
export class TranscriptionModule {}
