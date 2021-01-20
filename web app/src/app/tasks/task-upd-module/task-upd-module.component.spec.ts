import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskUpdModuleComponent } from './task-upd-module.component';

describe('TaskUpdModuleComponent', () => {
  let component: TaskUpdModuleComponent;
  let fixture: ComponentFixture<TaskUpdModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskUpdModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskUpdModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
