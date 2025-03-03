import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-payment-methods',
  standalone: false,
  templateUrl: './payment-methods.component.html',
  styleUrl: './payment-methods.component.scss'
})
export class PaymentMethodsComponent {
  paymentForm!: FormGroup; 

  selectedPayment: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form
    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern('[0-9]{16}')]], // Example validation
      cardName: ['', Validators.required],
      expiryDate: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.pattern('[0-9]{3}')]]
    });
  }

  submitPayment(): void {
    if (this.paymentForm.valid) {
      console.log('Payment submitted:', this.paymentForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
