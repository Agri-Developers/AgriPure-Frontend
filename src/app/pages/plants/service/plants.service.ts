import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { TemplateService } from "../../../services/template.service";
import { Plants } from "../model/Plants";

@Injectable({
  providedIn: 'root'
})
export class PlantsService extends TemplateService<Plants>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'http://localhost:3000/api/v1/plants'
   }
}
