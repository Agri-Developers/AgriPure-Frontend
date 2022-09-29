import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './authentication/log-in/log-in.component';
import { RegisterFormComponent } from './authentication/register-form/register-form.component';
import { PlansComponent } from './authentication/plans/plans.component';
import { PlantsComponent } from './pages/plants/plants.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'plants',
  },
  {
    path: 'accounts/login',
    component: LogInComponent,
  },
  {
    path: 'accounts/register',
    component: RegisterFormComponent,
  },
  {
    path: 'accounts/plans',
    component: PlansComponent,
  },
  {
    path: 'plants',
    component: PlantsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
