import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogaddComponent } from './dialogadd.component';

describe('DialogaddComponent', () => {
  let component: DialogaddComponent;
  let fixture: ComponentFixture<DialogaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
