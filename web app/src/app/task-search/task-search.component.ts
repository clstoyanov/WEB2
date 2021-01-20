import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task-search',
  templateUrl: './task-search.component.html',
  styleUrls: ['./task-search.component.css']
})
export class TaskSearchComponent implements OnInit {

  tasks: Task[];
  filteredTasks: Task[];
  private _searchTerm: string;
  get searchTerm(): string { return this._searchTerm;}
  set searchTerm(value: string) { this._searchTerm = value;
                                  this.filteredTasks= this.filterTasks(value);
                                }

  constructor(private taskService: TaskService,public activeModal: NgbActiveModal) { }

  filterTasks(searchString: string){
    return this.tasks.filter(task =>task.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }
  ngOnInit() {
    this.getTasks();
    this.filteredTasks = this.tasks;

  }

  getTasks(){
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

}
