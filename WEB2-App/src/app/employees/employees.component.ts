import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {

  employees: Employee[];

    constructor(private employeeService: EmployeeService) { }

  getEmployees(): void {
    this.employeeService.getEmployees()
    .subscribe(employees => this.employees = employees);
  }


  ngOnInit() {
    this.getEmployees();
  }

   add(first_name: string, last_name: string, department_id: number, birth_date: string): void {
    first_name = first_name.trim();
    last_name = last_name.trim();

    if (!first_name) { return; }
    this.employeeService.addEmployee({ first_name, last_name, department_id, birth_date } as Employee).subscribe(employee => {this.employees.push(employee);});
    }

 delete(employee: Employee): void {
 this.employees = this.employees.filter(e => e !== employee);
  this.employeeService.deleteEmployee(employee).subscribe();
 }

}
