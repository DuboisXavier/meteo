import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildOneComponent } from './features/children/child-one/child-one.component';
import { ChildTwoComponent } from './features/children/child-two/child-two.component';
import { ChildrenComponent } from './features/children/children.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { WeatherComponent } from './features/weather/weather.component';

const routes: Routes = [
  // Base
  { path:'', redirectTo: 'dashboard', pathMatch:'full'},

  // dashboard
  { path:'dashboard', component: DashboardComponent},

  //Weather
  { path:'weather', component: WeatherComponent},

  //Children
  { path:'children', component: ChildrenComponent,
  children: [
    { path: 'childOne', component: ChildOneComponent},
    { path: 'childTwo', component: ChildTwoComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
