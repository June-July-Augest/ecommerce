import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDetailComponent } from './prod-detail.component';

describe('ProdDetailComponent', () => {
  let component: ProdDetailComponent;
  let fixture: ComponentFixture<ProdDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
