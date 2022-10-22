import { Injectable } from '@angular/core';
import {TemplateService} from "../../../services/template.service";
import {Plants} from "../model/Plants";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlantsService extends TemplateService<Plants>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'http://localhost:3000/plants'
   }
}
