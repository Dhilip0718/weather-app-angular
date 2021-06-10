import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

import { FetchWeatherDetailsService } from '../services/fetch-weather-details.service';
import { CurrentWeatherDetails, WeatherDetails } from '../model/weatherInfo';

@Component({
  selector: 'app-app-current-weather',
  templateUrl: './app-current-weather.component.html',
  styleUrls: ['./app-current-weather.component.scss']
})
export class AppCurrentWeatherComponent implements OnInit {
  weatherDetails: CurrentWeatherDetails[] ;
  foreCastDetails: WeatherDetails[];


  constructor(private fetchWeatherDetailsService: FetchWeatherDetailsService) {
    this.weatherDetails = [];
  }

  ngOnInit(): void {
    forkJoin(this.fetchWeatherDetailsService.getWeatherDetails()).subscribe(
      response => {
        this.weatherDetails = [...response];
        console.log(this.weatherDetails);
      }
    );
  }
  invokeForecast(lat: number, lon: number): void {
    this.fetchWeatherDetailsService.getForecast(lat, lon).subscribe(
      response => {
        console.log(response);
        this.foreCastDetails = response;
      }

    );
  }

}
