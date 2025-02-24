import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSellerComponent } from './nav-bar-seller.component';

describe('NavBarSellerComponent', () => {
  let component: NavBarSellerComponent;
  let fixture: ComponentFixture<NavBarSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarSellerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
