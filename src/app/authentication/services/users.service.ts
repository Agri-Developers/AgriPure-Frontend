import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { TemplateService } from "src/app/services/template.service";
import { Users } from "../log-in/model/users";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends TemplateService<Users> {

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'http://localhost:3000/users';
  }
}
