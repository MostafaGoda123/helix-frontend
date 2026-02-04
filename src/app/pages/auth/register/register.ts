import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register implements OnInit {

  registerForm!: FormGroup;
  errorMessage: string = ' ';

  constructor(private fb: FormBuilder , private authService : AuthService , private router: Router , private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.passwordsMatchValidator
    });
  }

  // ===== Custom Validator =====
  passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (!password || !confirmPassword) {
      return null;
    }
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  // ===== onSubmit =====
  onSubmit() {
    if (this.registerForm.valid) {
      this.authService.register_step1(this.registerForm.value).subscribe({
        next: (res) => {
          console.log('Register success', res);
          this.registerForm.reset();
          this.router.navigate(['/login']);
        },
        error: (err) => {
          const backendMessage: string = err.error?.message || '';

          if (backendMessage.includes('Passwords must have')) {
            this.errorMessage = "Password isn't strong enough";
          } else if (backendMessage) {
            this.errorMessage = backendMessage;
          } else {
            this.errorMessage = 'Registration failed';
          }
          this.cdr.detectChanges();
        }
      });
    }else {
      // ===== Error messages =====
      if (this.registerForm.get('userName')?.errors?.['required'])
        this.errorMessage = "userName is required";

      else if (this.registerForm.get('email')?.errors?.['required'])
        this.errorMessage = "email is required";

      else if (this.registerForm.get('email')?.errors?.['email'])
        this.errorMessage = "email is invalid";

      else if (this.registerForm.get('password')?.errors?.['required'])
        this.errorMessage = "password is required";

      else if (this.registerForm.get('password')?.errors?.['minlength'])
        this.errorMessage = "minLength of password is 8";

      else if (this.registerForm.get('confirmPassword')?.errors?.['required'])
        this.errorMessage = "confirm password is required";

      else if (this.registerForm.errors?.['passwordMismatch'])
        this.errorMessage = "password and confirm password do not match";

      else
        this.errorMessage = ' ';
    }
  }
}
