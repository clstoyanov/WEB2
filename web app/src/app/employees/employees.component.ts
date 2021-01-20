import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { NgbModalOptions, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateModalComponent } from './create-modal/create-modal.component';
import { EmpDetModalComponent } from './emp-det-modal/emp-det-modal.component';
import { EmployeeSearchComponent } from '../employee-search/employee-search.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  modalOptions: NgbModalOptions;
  employees: Employee[];

  constructor(private employeeService: EmployeeService, private modalService: NgbModal) {
  this.modalOptions = {
    backdrop: 'static',
    backdropClass: 'customBackdrop'
  }
  }
//gets the data from employeeService of all employees and then puts it in the employees array
//and then sorts them on id
  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees.sort((a, b) => (a.id > b.id) ? 1 : -1));
  }
//Calls getEmployees on initialization
  ngOnInit() {
    this.getEmployees();
  }
  //sorts employees array on ID
  sortID() {
    this.employees = this.employees.sort((a, b) => (a.id > b.id) ? 1 : -1)
  }
    //sorts employees array on Last Name
  sortLN() {
    this.employees = this.employees.sort((a, b) => (a.last_name > b.last_name) ? 1 : -1)
  }
    //sorts employees array on First Name
  sortFN() {
this.employees = this.employees.sort((a, b) => (a.first_name > b.first_name) ? 1 : -1)
  }
  //Opens the createEmployee dialogue, refreshes page on close
  openCreate(): void {

    const modalRef = this.modalService.open(CreateModalComponent);
    modalRef.result.then(() => this.ngOnInit())
  }
   //Opens the employeeDetails dialogue, refreshes page on close
  openDetails(empsend: Employee): void {
    const modalRef = this.modalService.open(EmpDetModalComponent);
    modalRef.componentInstance.employee = empsend;
    modalRef.result.then(() => this.ngOnInit())
  }
//contacts the employeeservice to delete data associated eith employye with given id
//after additional conformation
  delete(employee: Employee): void {
    this.employees = this.employees.filter(e => e !== employee);
    if(confirm('Are you sure to delete ' + employee.first_name + ' ' + employee.last_name + '?')){
      this.employeeService.deleteEmployee(employee).subscribe()
    }

  }
  openSearch():void{
    const modalRef = this.modalService.open(EmployeeSearchComponent);
    modalRef.result.then(() => this.ngOnInit());
  }

}
