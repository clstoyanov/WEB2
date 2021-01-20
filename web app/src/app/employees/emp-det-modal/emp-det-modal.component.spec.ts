import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDetModalComponent } from './emp-det-modal.component';

describe('EmpDetModalComponent', () => {
  let component: EmpDetModalComponent;
  let fixture: ComponentFixture<EmpDetModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpDetModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
