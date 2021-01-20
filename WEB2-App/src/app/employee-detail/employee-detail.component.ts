import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Dept } from '../dept/dept';
import { DeptService } from '../dept/dept.service';
import { map } from  'rxjs/operators';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {


dept: Dept;
depts: Dept[];
employee: Employee;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location,
    private deptService: DeptService
  ) { }



  ngOnInit(): void {
    this.getEmployee();
    console.log(this.employee);
    this.getDeptsList();
  }
  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.employeeService.getEmployee(id)
    .subscribe(employee => this.employee = employee);
  }
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.employeeService.updateEmployee(this.employee)
      .subscribe(() => this.goBack());
  }


getDeptsList() {
  this.deptService.getDepts().subscribe(depts => this.depts = depts);

}
}
