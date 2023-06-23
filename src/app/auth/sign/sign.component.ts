import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from 'src/app/shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent implements OnInit {
  @Input() register = false;
  signForm!: FormGroup;
  @Output() formSubmit = new EventEmitter<User>();

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
    this.updateNameValidity();
  }

  initForm(): void {
    this.signForm = this.fb.group({
      name: [null],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  onLogin(): void {
    if (this.signForm.valid) {
      this.formSubmit.emit(this.signForm.value);
    }
  }

  onRegister(): Promise<boolean> | void {
    if (!this.register) {
      return this.router.navigate(['register']);
    }
    if (this.signForm.valid) {
      this.formSubmit.emit(this.signForm.value);
    }
  }

  updateNameValidity(): void {
    const nameControl = this.signForm.controls['name'];

    if (this.register) {
      nameControl.addValidators([Validators.required]);
      nameControl.updateValueAndValidity();
    }
  }
}
