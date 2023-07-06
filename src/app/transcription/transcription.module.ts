import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioUploadComponent } from './audio-upload/audio-upload.component';
import { SelectInputWayComponent } from './select-input-way/select-input-way.component';
import { SelectLanguagesComponent } from './select-languages/select-languages.component';
import { SpeechRecordingComponent } from './speech-recording/speech-recording.component';
import { TranscriptionComponent } from './transcription.component';
import { FormsModule } from '@angular/forms';
import { TranscriptionListComponent } from './transcription-list/transcription-list.component';
import { NewTranscriptionComponent } from './new-transcription/new-transcription.component';
import { SharedModule } from '../shared/shared.module';

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
  imports: [CommonModule, FormsModule, SharedModule],
})
export class TranscriptionModule {}
