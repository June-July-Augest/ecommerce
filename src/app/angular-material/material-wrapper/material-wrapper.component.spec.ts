import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialWrapperComponent } from './material-wrapper.component';

describe('MaterialWrapperComponent', () => {
  let component: MaterialWrapperComponent;
  let fixture: ComponentFixture<MaterialWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
