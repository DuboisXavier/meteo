import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core/core.module';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { WeatherComponent } from './features/weather/weather.component';
import { ChildrenComponent } from './features/children/children.component';
import { ChildOneComponent } from './features/children/child-one/child-one.component';
import { ChildTwoComponent } from './features/children/child-two/child-two.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToCelsuisPipe } from './shared/pipes/to-celsuis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    WeatherComponent,
    ChildrenComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ToCelsuisPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
