import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompComponent } from './form-comp.component';

describe('FormCompComponent', () => {
  let component: FormCompComponent;
  let fixture: ComponentFixture<FormCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
