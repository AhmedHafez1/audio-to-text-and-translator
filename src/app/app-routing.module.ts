import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranscriptionComponent } from './transcription/transcription.component';
import { SignComponent } from './auth/sign/sign.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { TranscriptionListComponent } from './transcription/transcription-list/transcription-list.component';
import { SynthesizeSpeechComponent } from './synthesize/synthesize-speech/synthesize-speech.component';
import { NewTranscriptionComponent } from './transcription/new-transcription/new-transcription.component';
import { MainEntryComponent } from './main-entry/main-entry.component';

const routes: Routes = [
  {
    path: 'transcriptions',
    component: TranscriptionListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'transcriptions/new',
    component: NewTranscriptionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'transcriptions/:id',
    component: TranscriptionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'synthesize',
    component: SynthesizeSpeechComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: MainEntryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
