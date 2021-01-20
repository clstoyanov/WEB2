import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})
export class CreateModalComponent implements OnInit {

  emp: Employee = new Employee();

  constructor(private employeeService: EmployeeService, public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  //after conformation checks if name has been given, then contactc the employee service
  //to add new employee and then closes the dialogue modal
  add(): void {
    if (confirm('Are you sure to add ' + this.emp.first_name + '?') == true) {
      if (!this.emp.first_name) { return; }
      this.employeeService.addEmployee(this.emp).subscribe(employee => {
        employee
        this.activeModal.close()
      });
    }
  }
}
