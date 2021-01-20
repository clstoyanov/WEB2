import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from 'src/app/task';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-upd-module',
  templateUrl: './task-upd-module.component.html',
  styleUrls: ['./task-upd-module.component.css']
})
export class TaskUpdModuleComponent implements OnInit {

  task: Task = new Task();

  constructor(public activeModal: NgbActiveModal, private taskService: TaskService) { }

  ngOnInit() {
  }
  //asks for conformation, if yes contacts the taskservice to add the new task  and closes the
  //dialog upon doing so
  add(): void {
    if (confirm('Are you sure to add ' + this.task.name + '?') == true) {
      if (!this.task.name) { return; }
      this.taskService.addTask(this.task).subscribe(task => {
        task
        this.activeModal.close()
      });
    }
  }
}
