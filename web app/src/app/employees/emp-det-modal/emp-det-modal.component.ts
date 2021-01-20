
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/employee';
@Component({
  selector: 'app-emp-det-modal',
  templateUrl: './emp-det-modal.component.html',
  styleUrls: ['./emp-det-modal.component.css']
})
export class EmpDetModalComponent implements OnInit {
@Input() employee;
  constructor(private employeeService: EmployeeService,public activeModal: NgbActiveModal) {}

  ngOnInit() {

  }
  //after conformation sends employee to employee service to update and then closes the modal
  save(): void {
    if (confirm('Are you sure to update ' + this.employee.first_name + '?')==true) {
      this.employeeService.updateEmployee(this.employee)
      .subscribe(() => this.activeModal.close());

  }


}
}
