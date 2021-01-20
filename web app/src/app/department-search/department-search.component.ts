import { Component, OnInit, Input } from '@angular/core';
import { Dept } from '../dept/dept';
import { DeptService } from '../dept/dept.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-department-search',
  templateUrl: './department-search.component.html',
  styleUrls: ['./department-search.component.css']
})
export class DepartmentSearchComponent implements OnInit {
@Input()
  depts: Dept[];
  filteredDepartments: Dept[];
  private _searchTerm: string;
  get searchTerm(): string { return this._searchTerm;}
  set searchTerm(value: string) { this._searchTerm = value;
                                  this.filteredDepartments= this.filterDepartments(value);
                                }

  constructor(private deptService: DeptService,public activeModal: NgbActiveModal) { }

  filterDepartments(searchString: string){
    return this.depts.filter(department =>department.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  ngOnInit() {
    this.getDepts();
    this.filteredDepartments = this.depts;
  }

  getDepts(){
   this.deptService.getDepts().subscribe(depts => {
     console.log(depts);
     this.depts = depts;});
   console.log(this.depts);

  }
}
