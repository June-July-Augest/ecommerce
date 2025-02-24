import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialLayoutComponent } from './material-layout.component';

describe('MaterialLayoutComponent', () => {
  let component: MaterialLayoutComponent;
  let fixture: ComponentFixture<MaterialLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
