import { Component, OnInit } from '@angular/core';
import { DeptService } from '../dept.service';
import { map } from 'rxjs/operators';
import { Dept } from '../dept';

@Component({
  selector: 'app-depts-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {

  depts: any;
  selectedDept:Dept;
  constructor(private deptService: DeptService) { }

  ngOnInit() {
    this.getDepts();
  }

 onSelect(dept: Dept ): void {
   this.selectedDept = dept;
 }
 getDepts(): void {
  this.deptService.getDepts().subscribe(depts => this.depts = depts);
}
  delete(id:any)
  {
    if(confirm("Are you sure to delete "+name)) {
      console.log(this.deptService.deleteDept(id).subscribe(res=>{this.getDepts()}));
    }
    console.log(id);

  }




}
