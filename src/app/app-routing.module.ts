import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './authentication/log-in/log-in.component';
import { RegisterFormComponent } from './authentication/register-form/register-form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'accounts/login',
  },
  {
    path: 'accounts/login',
    component: LogInComponent,
  },
  {
    path: 'accounts/register',
    component: RegisterFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
