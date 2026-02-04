import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
window: any;

hidePassword: boolean = true;

alert(arg0: string) {
throw new Error('Method not implemented.');
}

  loginForm!: FormGroup;
  errorMessage: string = ' ';

  constructor(private fb : FormBuilder , private authService : AuthService , private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      emailAddress: ['' , [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          // console.log('Login success', res);
          this.loginForm.reset();
          localStorage.setItem('token', res.data.accessToken);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.errorMessage = err.error?.message || 'Login failed';
          // console.error('Login failed', err.error?.message);
        }
      });
    }else {
      if (this.loginForm.get('emailAddress')?.errors?.['required']) this.errorMessage = "email is required";
      else if (this.loginForm.get('emailAddress')?.errors?.['email']) this.errorMessage = "email is invalid";
      else if (this.loginForm.get('password')?.errors?.['required']) this.errorMessage = "password is required";
      else if (this.loginForm.get('password')?.errors?.['minlength']) this.errorMessage = "minLength of password is 8";
      else this.errorMessage = ' ';
    }
  }

  handleForgetPassword(){
    if (this.loginForm.get('emailAddress')?.value !== '') {
      this.authService.forgotPassword(this.loginForm.get('emailAddress')?.value).subscribe({
        next: (res) => {
          // console.log('Forgot Password success', res);
          this.errorMessage = "Reset password link sent to your email";
        },
        error: (err) => {
          // console.error('Forgot Password failed', err.error?.message);
          this.errorMessage = err.error?.message || 'Request failed';
        }
      });
    }else {
      this.errorMessage = "enter your email first";
    }
  }
  
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

}
