import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DeptService } from '../dept.service';
import { Dept } from '../dept';

@Component({
  selector: 'app-dialogadd',
  templateUrl: './dialogadd.component.html',
  styleUrls: ['./dialogadd.component.css']
})
export class DialogaddComponent implements OnInit {

  @Input()
  dept: Dept = new Dept();
  submitted = false;

  constructor(public activeModal: NgbActiveModal, private deptService: DeptService) { }

  ngOnInit() {
  }
  //Asks if sure to add department and calls the deptservice with the new dept to add it
  save() {
    if (confirm('Are you sure to add ' + this.dept.name + '?') == true) {
      this.deptService.addDept(this.dept).subscribe(res => {
      });
    }
  }
}