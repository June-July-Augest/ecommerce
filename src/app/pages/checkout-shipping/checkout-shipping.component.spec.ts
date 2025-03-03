import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutShippingComponent } from './checkout-shipping.component';

describe('CheckoutShippingComponent', () => {
  let component: CheckoutShippingComponent;
  let fixture: ComponentFixture<CheckoutShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutShippingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
