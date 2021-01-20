import { Component, OnInit, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { map, max } from 'rxjs/operators';

import { Dept } from '../dept';
import { DeptService } from '../dept.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-dept',
  templateUrl: './create-dept.component.html',
  styleUrls: ['./create-dept.component.css']
})
export class CreateDeptComponent implements OnInit {

  dept: Dept = new Dept();
  submitted = false;

  constructor(private deptService: DeptService,private ngZone: NgZone,
    private router: Router,) { }

  ngOnInit() {

  }
see(){
  console.log(this.dept)
}


  save() {
    this.deptService.addDept(this.dept).subscribe(res => {
      console.log('Issue added!')
      this.ngZone.run(() => this.router.navigateByUrl('/depts'))
    });
  }

}




