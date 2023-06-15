import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SelectLanguagesComponent } from './select-languages/select-languages.component';
import { TranscriptionTranslationOutputComponent } from './transcription-translation-output/transcription-translation-output.component';
import { SpeechRecordingComponent } from './speech-recording/speech-recording.component';
import { AudioUploadComponent } from './audio-upload/audio-upload.component';
import { SelectInputWayComponent } from './select-input-way/select-input-way.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SelectLanguagesComponent,
    TranscriptionTranslationOutputComponent,
    SpeechRecordingComponent,
    AudioUploadComponent,
    SelectInputWayComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
