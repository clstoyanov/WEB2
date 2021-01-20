import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { EmployeesComponent } from './employees/employees.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {
  MatFormFieldModule,
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DialogModalDeptdetComponent } from './dept/dialog-modal-deptdet/dialog-modal-deptdet.component';
import { DialogaddComponent } from './dept/dialogadd/dialogadd.component';
import { CreateModalComponent } from './employees/create-modal/create-modal.component';
import { EmpDetModalComponent } from './employees/emp-det-modal/emp-det-modal.component';
import { TaskDetModuleComponent } from './tasks/task-det-module/task-det-module.component';
import { TaskUpdModuleComponent } from './tasks/task-upd-module/task-upd-module.component';

import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './calendar/calendar.component';
import { DeptListComponent } from './dept/dept-list/dept-list.component';
import { DepartmentSearchComponent } from './department-search/department-search.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { TaskSearchComponent } from './task-search/task-search.component';

@NgModule({
  declarations: [
    AppComponent,

    TasksComponent,
    // DepartmentsComponent,
    EmployeesComponent,
    DeptListComponent,
    DialogaddComponent,
    DashboardComponent,
    DialogaddComponent,
    CreateModalComponent,
    EmpDetModalComponent,
    TaskDetModuleComponent,
    TaskUpdModuleComponent,
    DialogModalDeptdetComponent,
    CalendarComponent,
    DepartmentSearchComponent,
    EmployeeSearchComponent,
    TaskSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    CommonModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  entryComponents: [
    DialogModalDeptdetComponent,
    DialogaddComponent,
    CreateModalComponent,
    EmpDetModalComponent,
    TaskDetModuleComponent,
    TaskUpdModuleComponent,
    DepartmentSearchComponent,
    EmployeeSearchComponent,
    TaskSearchComponent
  ],
  providers: [DeptListComponent, DialogModalDeptdetComponent],
  bootstrap: [AppComponent],
  exports: [CalendarComponent]
})
export class AppModule { }
