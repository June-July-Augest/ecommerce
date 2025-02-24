import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryActionBlockComponent } from './inventory-action-block.component';

describe('InventoryActionBlockComponent', () => {
  let component: InventoryActionBlockComponent;
  let fixture: ComponentFixture<InventoryActionBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryActionBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryActionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
