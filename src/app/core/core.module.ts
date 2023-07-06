import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [CommonModule, SharedModule],
})
export class CoreModule {}
