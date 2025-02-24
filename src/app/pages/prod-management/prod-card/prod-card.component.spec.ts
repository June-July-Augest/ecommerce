import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdCardComponent } from './prod-card.component';

describe('ProdCardComponent', () => {
  let component: ProdCardComponent;
  let fixture: ComponentFixture<ProdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
