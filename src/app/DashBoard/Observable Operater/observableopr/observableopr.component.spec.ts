import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableoprComponent } from './observableopr.component';

describe('ObservableoprComponent', () => {
  let component: ObservableoprComponent;
  let fixture: ComponentFixture<ObservableoprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableoprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableoprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
