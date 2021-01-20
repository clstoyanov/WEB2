import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';

import { Dept } from './dept';

@Injectable({
  providedIn: 'root'
})
export class DeptService {

  private deptsUrl = 'http://i875395.hera.fhict.nl/api/409587/department';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
//gets department data from api
  getDepts (): Observable<Dept[]> {
    return this.http.get<Dept[]>(this.deptsUrl).pipe(tap(_ => 'fetched depts'),
      catchError(this.handleError<Dept[]>('getDepts', [])));
  }
//handles data getting errors
  getDeptNo404<Data>(id: number): Observable<Dept> {
    const url = `${this.deptsUrl}/?id=${id}`;
    return this.http.get<Dept[]>(url)
      .pipe(
        map(depts => depts[0]), // returns a {0|1} element array
        tap(t => {
          const outcome = t ? `fetched` : `did not find`;
          `${outcome} dept id=${id}`;
        }),
        catchError(this.handleError<Dept>(`getDept id=${id}`))
      );
  }
//gets dept data by dept id
  getDept(id: number): Observable<Dept> {
    const url = `${this.deptsUrl}/?id=${id}`;
    return this.http.get<Dept>(url).pipe(tap(_ => `fetched dept id=${id}`),
      catchError(this.handleError<Dept>(`getDept id=${id}`))
    );
  }
//posts dept data to api
  addDept (dept: Dept) {
    return this.http.post(this.deptsUrl,dept);
  }
//deletes dept data from api with given id
  deleteDept (id:number){
    return this.http.delete(this.deptsUrl + '?id=' + id);
  }
//puts data in the api to department with given id
  updateDept (dept: Dept): Observable<any> {
    return this.http.put(this.deptsUrl + '?id=' + dept.id,dept)
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
