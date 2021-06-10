import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppCurrentWeatherComponent } from './app-current-weather/app-current-weather.component';

const routes: Routes = [
  { path: 'currentWeather', component: AppCurrentWeatherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
