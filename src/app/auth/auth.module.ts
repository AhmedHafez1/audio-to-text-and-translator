import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignComponent } from './sign/sign.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SignComponent, RegisterComponent, LoginComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
})
export class AuthModule {}
