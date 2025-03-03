import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutEmailComponent } from './checkout-email.component';

describe('CheckoutEmailComponent', () => {
  let component: CheckoutEmailComponent;
  let fixture: ComponentFixture<CheckoutEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
