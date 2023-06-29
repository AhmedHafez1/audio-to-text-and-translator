import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [CommonModule, AngularMaterialModule],
})
export class CoreModule {}
