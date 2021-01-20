import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {

employees: Employee[];
filteredEmployees: Employee[];
private _searchTerm: string;
get searchTerm(): string { return this._searchTerm;}
set searchTerm(value: string) { this._searchTerm = value;
                                this.filteredEmployees= this.filterEmployees(value);
                              }
  constructor(private employeeService: EmployeeService,public activeModal: NgbActiveModal) { }




filterEmployees(searchString: string){
  return this.employees.filter(employee =>employee.last_name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
}



  ngOnInit() {
    this.getEmployees();
    this.filteredEmployees = this.employees;
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
    .subscribe(employees => this.employees = employees);
  }
}
