import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { ToDo } from '../model/Event';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  //Event Endpoint
  basePath = 'http://localhost:3000/api/v1/events'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', //solo emite o recepciona de tipo json
      //Content-Type = se usa para decirle cual es el formato en el que se esta mandando un pedido
      // application/json = estandar
    })
  }
  constructor(private http: HttpClient) { }

  //Api Error Handling
  handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      //Default error handling
      console.log(`An error ocurred: ${error.error.message}`);
    } else {
      //Unseccessful Response Error Code returned from Backend
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    //Return Observable with Error Message to Client
    return throwError('Something happened with request, please try again later');
  }

  //Create Event
  create(item: ToDo): Observable<ToDo>{
    return this.http.post<ToDo>(this.basePath, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  //Get Event by date
  getByDate(date: Date): Observable<ToDo[]>{
    return this.http.get<ToDo[]>(`${this.basePath}?date=${date.toISOString()}`)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  //Delete Event
  delete(id: any){
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }
}
