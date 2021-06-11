import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { faWind } from '@fortawesome/free-solid-svg-icons';

import { FetchWeatherDetailsService } from '../services/fetch-weather-details.service';
import { CurrentWeatherDetails, WeatherDetails } from '../model/weatherInfo';

/* The parent component which invokes fetchWeatherDetailsService on Onload hook and
returns an observable array and the same is used to display weather details of top 5 Eu cities
*/

@Component({
  selector: 'app-app-current-weather',
  templateUrl: './app-current-weather.component.html',
  styleUrls: ['./app-current-weather.component.scss']
})
export class AppCurrentWeatherComponent implements OnInit {
  weatherDetails: CurrentWeatherDetails[] ;
  foreCastDetails: WeatherDetails[];
  currentCityName: string;
  faWind = faWind; // Font awesome reference for displaying wind icon

  constructor(private fetchWeatherDetailsService: FetchWeatherDetailsService) {}

  // OnInit invokes getWeatherDetails to fetch top 5 city weather details.

  ngOnInit(): void {
    forkJoin(this.fetchWeatherDetailsService.getWeatherDetails()).subscribe(
      response => {
        this.weatherDetails = response;
      }
    );
  }


  /*
    Action: when user selects an indivudual city, invokeForecast details is called and getForecast method is invoked.
    Implementation : lat & lon details are passed to app-app-forecast-weather component.
  */

  invokeForecast(lat: number, lon: number, cityName: string): void {
    this.fetchWeatherDetailsService.getForecast(lat, lon).subscribe(response => {
        this.currentCityName = cityName;
        this.foreCastDetails = response;
      });
  }
}

