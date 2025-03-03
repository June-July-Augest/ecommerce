import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = ''; // Declare error message
  successMessage: string = ''; // Declare success message

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login successful:', this.loginForm.value);
      this.errorMessage = ''; // Clear previous errors
      this.successMessage = 'Login successful!'; // Show success message
    } else {
      this.successMessage = ''; // Clear success message
      this.errorMessage = 'Please enter a valid email and password.'; // Show error message
      this.loginForm.markAllAsTouched(); // Highlight invalid fields
    }
  }
}
