import { Component, OnInit } from '@angular/core';
import { DeptService } from '../dept.service';
import { Dept } from '../dept';
import { MatDialog } from '@angular/material';
import { DialogModalDeptdetComponent } from '../dialog-modal-deptdet/dialog-modal-deptdet.component';
import { Router } from '@angular/router';
import { DialogaddComponent } from '../dialogadd/dialogadd.component';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { DepartmentSearchComponent } from 'src/app/department-search/department-search.component';



@Component({
  selector: 'app-depts-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {
  dialogValue: string;
  sendValue: string;
  depts: any;
  selectedDept: Dept;
  router: Router;
  modalOptions: NgbModalOptions;
  constructor(private deptService: DeptService, public dialog: MatDialog, private modalService: NgbModal) { this.modalOptions = {
    backdrop: 'static',
    backdropClass: 'customBackdrop'
  };}

//calls getDepts on initialization
  ngOnInit() {
    this.getDepts();
  }
//calls the deptservice to get the data for all depts and assigns the data to the depts array in this component
 getDepts(): void {
  this.deptService.getDepts().subscribe(depts => {
    this.depts = depts; });
}
//sorts depts array based on id
sortID() {
  this.depts = this.depts.sort((a, b) => (a.id > b.id) ? 1 : -1);
}
//sorts depts array based on name
sortDeptN() {
 this.depts = this.depts.sort((a, b) => (a.name > b.name) ? 1 : -1);
}
//calls the deptservice with id of department to delete, but asks additional permission first
  delete(id: any) {
    if (confirm('Are you sure to delete ' + name)) {
     this.deptService.deleteDept(id).subscribe(res => {this.getDepts(); });
    }
  }
  //opens the dialog for Department Details, on close calls to refresh depts
  openDetails(deptsend: Dept): void {
    const modalRef = this.modalService.open(DialogModalDeptdetComponent);
    modalRef.componentInstance.dept = deptsend;
    modalRef.result.then(() => {
    this.getDepts()});
  }
  //opens the dialog for department creation, on close calls to refresh depts
  openCreate(): void {
    const modalRef = this.modalService.open(DialogaddComponent);
    modalRef.result.then(() => this.ngOnInit());
  }
  openSearch():void{
    const modalRef = this.modalService.open(DepartmentSearchComponent);
    modalRef.result.then(() => this.ngOnInit());
  }




}
