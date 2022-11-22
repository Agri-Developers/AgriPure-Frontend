import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import { Forecast } from '../model/Forecast';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  basePath = 'https://cors-anywhere.herokuapp.com/https://pro.openweathermap.org/data/2.5/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  getByLatLon(lat: any, lon: any): Observable<Forecast>{
    return this.http.get<Forecast>(
      `${this.basePath}/weather?lat=${lat}&lon=${lon}&appid=21a609a8f56904a467ee6e4c69864775&units=metric`,
      this.httpOptions)
      .pipe(
        retry(2), 
        catchError(this.handleError)
      );
  }

  getByCity(city: any): Observable<Forecast>{
    return this.http.get<Forecast>(
      `${this.basePath}/weather?q=${city}&appid=21a609a8f56904a467ee6e4c69864775&units=metric`,
      this.httpOptions)
      .pipe(
        retry(2), 
        catchError(this.handleError)
      );
  }
}
