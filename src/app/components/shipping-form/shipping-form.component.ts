import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shipping-form',
  standalone: false,
  templateUrl: './shipping-form.component.html',
  styleUrl: './shipping-form.component.scss'
})
export class ShippingFormComponent {
  shippingForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.shippingForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]]
    });
  }

  onSubmit() {
    if (this.shippingForm.valid) {
      // Handle form submission
      console.log('Shipping Details:', this.shippingForm.value);
    }
  }
}
