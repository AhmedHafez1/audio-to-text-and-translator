import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent implements OnInit {
  @Input() register = false;
  signForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

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

  onSubmit(): void {
    if (this.signForm.valid) {
      const credentials = {
        email: this.signForm.value.email,
        password: this.signForm.value.password,
      };

      this.authService.login(credentials).subscribe(
        () => {
          // Handle successful login, such as redirecting to a protected page
        },
        (error: any) => {
          // Handle login error, such as displaying error message
        }
      );
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
