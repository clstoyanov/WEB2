import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material';

import { Task } from '../task';
import { TaskService } from '../task.service';
import { TaskDetModuleComponent } from '../tasks/task-det-module/task-det-module.component';

import { Dept } from '../dept/dept';
import { DeptService } from '../dept/dept.service';
import { DialogModalDeptdetComponent } from '../dept/dialog-modal-deptdet/dialog-modal-deptdet.component';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { EmpDetModalComponent } from '../employees/emp-det-modal/emp-det-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard';

  tasks: Task[];
  
  depts: any;
  selectedDept:Dept;

  employees: Employee[];

  modalOptions: NgbModalOptions;

  constructor(private taskService: TaskService, private deptService: DeptService, private employeeService: EmployeeService, public dialog: MatDialog, private modalService: NgbModal) { this.modalOptions = {
    backdrop: 'static',
    backdropClass: 'customBackdrop'
  };}

  ngOnInit() {
    this.getTasks();
    this.getDepts();
    this.getEmployees();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks.splice(0,4));
  }

  getDepts(): void {
    this.deptService.getDepts().subscribe(depts => this.depts = depts.splice(0,4));
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees.splice(0,4));
  }

  openTaskDetails(tasksend: Task): void {
    const modalRef = this.modalService.open(TaskDetModuleComponent);
    modalRef.componentInstance.task = tasksend;
    modalRef.result.then(() => this.ngOnInit())
  }

  openDeptDetails(deptsend: Dept): void {
    const modalRef = this.modalService.open(DialogModalDeptdetComponent);
    modalRef.componentInstance.dept = deptsend;
    modalRef.result.then(() => {
    this.getDepts()});
  }
  
  openEmpDetails(empsend: Employee): void {
    const modalRef = this.modalService.open(EmpDetModalComponent);
    modalRef.componentInstance.employee = empsend;
    modalRef.result.then(() => this.ngOnInit())
  }
}
