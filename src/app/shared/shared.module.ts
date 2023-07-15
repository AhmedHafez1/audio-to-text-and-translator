import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeFormatPipe } from './pipes/time-format.pipe';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TimeFormatPipe],
  imports: [CommonModule],
  exports: [TimeFormatPipe, AngularMaterialModule, FormsModule],
})
export class SharedModule {}
