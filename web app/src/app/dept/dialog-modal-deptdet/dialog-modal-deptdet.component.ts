import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';
import { DeptService } from '../dept.service';

@Component({
  selector: 'app-dialog-modal-deptdet',
  templateUrl: './dialog-modal-deptdet.component.html',
  styleUrls: ['./dialog-modal-deptdet.component.css']
})
export class DialogModalDeptdetComponent implements OnInit {

  @Input() dept;
  employees: Employee[];

  constructor(public activeModal: NgbActiveModal,private deptService: DeptService,
    private employeeService: EmployeeService) {}
//calls getAllEmployees on initialization
  ngOnInit() {
    this.getAllEmployees();
  }
  //calls the deptService to update the department after conformation
  save(): void {
    if (confirm('Are you sure to update ' + this.dept.name + '?')==true) {
      this.dept.employees.push();
      this.deptService.updateDept(this.dept).subscribe(() => {
    });
    }
  }
  //calls the employee service, gets all employees
  //and then filters the ones that belong to the department

  getAllEmployees(): void {
    this.employeeService
      .getEmployees()
      .subscribe(
        employees =>
          (this.employees = employees.filter(
            x => x.department_id === this.dept.id
          ))
      );
  }

}

