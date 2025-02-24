import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdListingBlockComponent } from './prod-listing-block.component';

describe('ProdListingBlockComponent', () => {
  let component: ProdListingBlockComponent;
  let fixture: ComponentFixture<ProdListingBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdListingBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdListingBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
