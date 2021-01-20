import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { Task } from './task';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const tasks = [
      {name: 'Task 1', id: 1, due_date: '12/04/2019', department_id: 10, employees: [4, 6, 8, 12]},
      {name: 'Task 2', id: 2, due_date: '14/08/2019', department_id: 12, employees: [4, 6, 8, 12]},
      {name: 'Task 3', id: 3, due_date: '31/12/2020', department_id: 12, employees: [4, 6, 8, 12]},
      {name: 'Task 4', id: 4, due_date: '19/07/2020', department_id: 15, employees: [4, 6, 8, 12]},
      {name: 'Task 5', id: 5, due_date: '19/07/2020', department_id: 14, employees: [4, 6, 8, 12, 34]},
      {name: 'Task 6', id: 6, due_date: '19/07/2020', department_id: 14, employees: [4, 6, 8, 12]},
      {name: 'Task 7', id: 7, due_date: '19/07/2020', department_id: 15, employees: [4, 6, 8, 12]},
      {name: 'Task 8', id: 8, due_date: '19-07-2020', department_id: 14, employees: [4, 6, 8, 12]}
    ];

    const employees = [
      {id: 1, department_id: 0, first_name: 'Jim', last_name: 'Smith', birth_date: '17/12/1998'},
      {id: 2, department_id: 0, first_name: 'Jimbo', last_name: 'Smith', birth_date: '17/12/1998'},
      {id: 3, department_id: 1, first_name: 'Jimothy', last_name: 'Smith', birth_date: '17/12/1998'},
      {id: 4, department_id: 1, first_name: 'Jack', last_name: 'Smith', birth_date: '17/12/1998'},
      {id: 5, department_id: 3, first_name: 'John', last_name: 'Smith', birth_date: '17/12/1998'},
      {id: 6, department_id: 15, first_name: 'Jill', last_name: 'Smith', birth_date: '17/12/1998'},
      ];

      return {tasks, employees};
  }

  genTaskId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 11;
  }

  genEmployeeId(employees: Employee[]): number {
    return employees.length > 0 ? Math.max(...employees.map(employee => employee.id)) + 1 : 11;
  }
}
