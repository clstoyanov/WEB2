import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksUrl = 'http://i875395.hera.fhict.nl/api/409587/task';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getTasks (): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl).pipe(tap(_ => 'fetched tasks'),
      catchError(this.handleError<Task[]>('getTasks', [])));
  }

  getTaskNo404<Data>(id: number): Observable<Task> {
    const url = `${this.tasksUrl}/?id=${id}`;
    return this.http.get<Task[]>(url)
      .pipe(
        map(tasks => tasks[0]), // returns a {0|1} element array
        tap(t => {
          const outcome = t ? `fetched` : `did not find`;
          `${outcome} task id=${id}`;
        }),
        catchError(this.handleError<Task>(`getTask id=${id}`))
      );
  }

  getTask(id: number): Observable<Task> {
    const url = `${this.tasksUrl}/?id=${id}`;
    return this.http.get<Task>(url).pipe(tap(_ => `fetched task id=${id}`),
      catchError(this.handleError<Task>(`getTask id=${id}`))
    );
  }

  addTask (task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task, this.httpOptions).pipe(tap((newTask: Task) => `added task w/ id=${newTask.id}`),
      catchError(this.handleError<Task>('addTask'))
    );
  }

  deleteTask (task: Task | number): Observable<Task> {
    const id = typeof task === 'number' ? task : task.id;
    const url = `${this.tasksUrl}/${id}`;

    return this.http.delete<Task>(url, this.httpOptions).pipe(tap(_ => `deleted task id=${id}`),
      catchError(this.handleError<Task>('deleteTask'))
    );
  }

  updateTask (task: Task): Observable<any> {
    return this.http.put(this.tasksUrl, task, this.httpOptions).pipe(tap(_ => `updated task id=${task.id}`),
      catchError(this.handleError<any>('updateTask'))
    );
  }



  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
