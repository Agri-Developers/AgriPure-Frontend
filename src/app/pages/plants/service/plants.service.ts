import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { User } from 'src/app/authentication/model/User';
import { TemplateService } from '../../../services/template.service';
import { Plants } from '../model/Plants';

@Injectable({
  providedIn: 'root',
})
export class PlantsService extends TemplateService<Plants> {
  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'http://localhost:8080/api/users/5/plants';
  }

  override getById(id: any): Observable<Plants> {
    let urlPath = 'http://localhost:8080/api/plants';
    return this.http
      .get<Plants>(`${urlPath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
