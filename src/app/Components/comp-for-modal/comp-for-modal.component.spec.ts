import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompForModalComponent } from './comp-for-modal.component';

describe('CompForModalComponent', () => {
  let component: CompForModalComponent;
  let fixture: ComponentFixture<CompForModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompForModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompForModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
