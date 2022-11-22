import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { TemplateService } from '../../../services/template.service';
import { Plot } from '../model/Plot';

@Injectable({
  providedIn: 'root',
})
export class PlotsService extends TemplateService<Plot> {
  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'https://apppagripure.herokuapp.com/api/plots';
  }
  createPlot(userId: any, item: any): Observable<Plot> {
    return this.http
      .post<Plot>(
        `${this.basePath}/${userId}`,
        JSON.stringify(item),
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }
}
