import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogModalDeptdetComponent } from './dialog-modal-deptdet.component';

describe('DialogModalDeptdetComponent', () => {
  let component: DialogModalDeptdetComponent;
  let fixture: ComponentFixture<DialogModalDeptdetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogModalDeptdetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogModalDeptdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
