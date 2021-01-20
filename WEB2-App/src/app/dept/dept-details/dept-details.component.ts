
import { DeptService } from '../dept.service';
import { Dept } from '../dept';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
  import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-dept-details',
  templateUrl: './dept-details.component.html',
  styleUrls: ['./dept-details.component.css']
})
export class DeptDetailsComponent implements OnInit {
  @Input() dept: Dept;
  employees: Employee[]
  newid:number=0;

  constructor(
    private route: ActivatedRoute,
    private deptService: DeptService,
    private location: Location,
    private employeeService:EmployeeService
  ) {}

  ngOnInit(): void {
    this.getDept();
    this.getAllEmployees();
  }

  getDept(): void {
    const id = +this.route.snapshot.paramMap.get('id');


    this.deptService.getDept(id).subscribe(dept => this.dept = dept);
    console.log(this.dept);
    this.getAllEmployees();
  }

  goBack(): void {
    this.location.back();
  }
  addEmployee(id:number):void{
    var idn=+id
    this.dept.employees.push(idn);
    console.log(this.dept)
  }

  save(): void {
    this.dept.employees.push()
    this.deptService.updateDept(this.dept).subscribe(() => {console.log(this.dept);});
  }
  getAllEmployees():void {
    this.employeeService.getEmployees()
    .subscribe(employees => this.employees = employees.filter(x=>x.department_id===this.dept.id));
  }

}
