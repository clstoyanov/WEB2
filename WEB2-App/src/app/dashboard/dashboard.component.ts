import { Component, OnInit } from '@angular/core';

import { Task } from '../task';
import { TaskService } from '../task.service';

import { Dept } from '../dept/dept';
import { DeptService } from '../dept/dept.service';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

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

  constructor(private taskService: TaskService, private deptService: DeptService, private employeeService: EmployeeService) { }

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

}
