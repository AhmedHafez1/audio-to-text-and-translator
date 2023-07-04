import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranscriptionComponent } from './transcription/transcription.component';
import { SignComponent } from './auth/sign/sign.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { TranscriptionListComponent } from './transcription/transcription-list/transcription-list.component';
import { SynthesizeSpeechComponent } from './synthesize/synthesize-speech/synthesize-speech.component';

const routes: Routes = [
  {
    path: 'transcription',
    component: TranscriptionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'transcription/:id',
    component: TranscriptionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'transcription-list',
    component: TranscriptionListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'synthesize',
    component: SynthesizeSpeechComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'transcription', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
