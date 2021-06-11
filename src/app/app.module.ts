import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCurrentWeatherComponent } from './app-current-weather/app-current-weather.component';
import { AppForecastWeatherComponent } from './app-forecast-weather/app-forecast-weather.component';
import { FetchWeatherDetailsService } from '../app/services/fetch-weather-details.service';

@NgModule({
  declarations: [
    AppComponent,
    AppCurrentWeatherComponent,
    AppForecastWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Import HttpClient Module to make HTTP requests.
    FontAwesomeModule // Import FontAwesome for icons.
  ],
  providers: [FetchWeatherDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
