import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareNumbersComponent } from './square-numbers.component';

describe('SquareNumbersComponent', () => {
  let component: SquareNumbersComponent;
  let fixture: ComponentFixture<SquareNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
