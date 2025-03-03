import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout-email',
  standalone: false,
  templateUrl: './checkout-email.component.html',
  styleUrl: './checkout-email.component.scss'
})
export class CheckoutEmailComponent {
  emailForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.emailForm.valid) {
      console.log(this.emailForm.value);
    }
  }
}
