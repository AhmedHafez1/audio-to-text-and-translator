import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranscriptionComponent } from './transcription/transcription.component';

const routes: Routes = [
  { path: 'transcription', component: TranscriptionComponent },
  { path: '', redirectTo: 'transcription', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
