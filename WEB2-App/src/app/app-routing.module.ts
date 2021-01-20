import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';
//import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

import { CreateDeptComponent } from './dept/create-dept/create-dept.component';
import { DeptListComponent } from './dept/dept-list/dept-list.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DeptDetailsComponent } from './dept/dept-details/dept-details.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'taskDetail/:id', component: TaskDetailComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'employeeDetail/:id', component: EmployeeDetailComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'depts', component: DeptListComponent },
  { path: 'deptdetail/:id', component: DeptDetailsComponent },
  { path: 'add', component: CreateDeptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
