import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout-shipping',
  standalone: false,
  templateUrl: './checkout-shipping.component.html',
  styleUrl: './checkout-shipping.component.scss'
})
export class CheckoutShippingComponent {
  shippingForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.shippingForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.shippingForm.valid) {
      console.log(this.shippingForm.value);
    }
  }
}
