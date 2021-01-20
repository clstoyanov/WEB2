import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetModuleComponent } from './task-det-module.component';

describe('TaskDetModuleComponent', () => {
  let component: TaskDetModuleComponent;
  let fixture: ComponentFixture<TaskDetModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDetModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDetModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
