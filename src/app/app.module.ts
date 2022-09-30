import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterFormComponent } from './authentication/register-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';

// componentes
import { LogInComponent } from './authentication/log-in/log-in.component';
import { PlansComponent } from './authentication/plans/plans.component';
import { PlantsComponent } from './pages/plants/plants.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ForecastComponent } from './pages/forecast/forecast.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PlotsComponent } from './pages/plots/plots.component';
import { DetailsComponent } from './pages/details/details.component';
import { AccordionSectionComponent } from './components/accordion-section/accordion-section.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    LogInComponent,
    PlansComponent,
    PlantsComponent,
    LayoutComponent,
    CalendarComponent,
    ForecastComponent,
    NotFoundComponent,
    PlotsComponent,
    DetailsComponent,
    AccordionSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatSidenavModule,
    MatDividerModule,
    MatExpansionModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
