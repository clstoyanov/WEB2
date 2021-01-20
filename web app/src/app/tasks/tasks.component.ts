import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { NgbModalOptions, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskDetModuleComponent } from './task-det-module/task-det-module.component';
import { TaskUpdModuleComponent } from './task-upd-module/task-upd-module.component';
import { TaskSearchComponent } from '../task-search/task-search.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  modalOptions: NgbModalOptions;
  tasks: Task[];

  constructor(private taskService: TaskService, private modalService: NgbModal) {
  this.modalOptions = {
    backdrop: 'static',
    backdropClass: 'customBackdrop'
  }
  }
//calls getTask on initialization
  ngOnInit() {
    this.getTasks();
  }
//calls tasks service to get the data for all tasks and putrs it int othe task array
  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }
  //sorts task array based on id
  sortID() {
   this.tasks = this.tasks.sort((a, b) => (a.id > b.id) ? 1 : -1)
  }
  //sorts task array based on task name
  sortTaskN() {
    this.tasks = this.tasks.sort((a, b) => (a.name > b.name) ? 1 : -1)
  }
//upon additional conformation, contacts the taskservice to delete the task
  delete(task: Task): void {
    this.tasks = this.tasks.filter(t => t !== task);
    if (confirm('Are you sure to delete ' + task.name + '?')) {
      this.taskService.deleteTask(task).subscribe()
    }

  }
  //opens the create task modal, refreshes on close
  openCreate(): void {

    const modalRef = this.modalService.open(TaskUpdModuleComponent);
    modalRef.result.then(() => this.ngOnInit())
  }
    //opens the task details modal, refreshes on close
  openDetails(tasksend: Task): void {
    const modalRef = this.modalService.open(TaskDetModuleComponent);
    modalRef.componentInstance.task = tasksend;
    modalRef.result.then(() => this.ngOnInit())
  }
  openSearch():void{
    const modalRef = this.modalService.open(TaskSearchComponent);
    modalRef.result.then(() => this.ngOnInit());
  }

}
