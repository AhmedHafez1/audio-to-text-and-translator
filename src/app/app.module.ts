import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AudioRecorderComponent } from './audio-recorder/audio-recorder.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SelectLanguagesComponent } from './select-languages/select-languages.component';
import { TranscriptionTranslationOutputComponent } from './transcription-translation-output/transcription-translation-output.component';
import { SpeechRecordingComponent } from './speech-recording/speech-recording.component';

@NgModule({
  declarations: [AppComponent, AudioRecorderComponent, SelectLanguagesComponent, TranscriptionTranslationOutputComponent, SpeechRecordingComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
