
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from '../../task.service';
import { Task } from '../../task';
@Component({
  selector: 'app-task-det-module',
  templateUrl: './task-det-module.component.html',
  styleUrls: ['./task-det-module.component.css']
})
export class TaskDetModuleComponent implements OnInit {
@Input() task: Task;
  constructor(private taskService:TaskService, public activeModal:NgbActiveModal) { }

  ngOnInit() {
  }
  //contacts the taskservice with the data creates the task and closes the dialog
  //after asking additional permission
  save(): void {
    if (confirm('Are you sure to update ' + this.task.name + '?')==true) {
      this.taskService.updateTask(this.task).subscribe(() => this.activeModal.close());
    }

  }


}
