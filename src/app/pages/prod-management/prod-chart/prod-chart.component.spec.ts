import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdChartComponent } from './prod-chart.component';

describe('ProdChartComponent', () => {
  let component: ProdChartComponent;
  let fixture: ComponentFixture<ProdChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
