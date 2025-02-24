import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInfoBlockComponent } from './dashboard-info-block.component';

describe('DashboardInfoBlockComponent', () => {
  let component: DashboardInfoBlockComponent;
  let fixture: ComponentFixture<DashboardInfoBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardInfoBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardInfoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
