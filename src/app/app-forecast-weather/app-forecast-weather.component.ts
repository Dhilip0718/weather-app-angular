import { Component, Input, OnInit } from '@angular/core';
import { faWind } from '@fortawesome/free-solid-svg-icons';

import { WeatherDetails } from '../model/weatherInfo';

// This component is used to display the hourly weather forecast details of the selected city.

@Component({
  selector: 'app-forecast-weather',
  templateUrl: './app-forecast-weather.component.html',
  styleUrls: ['./app-forecast-weather.component.scss']
})
export class AppForecastWeatherComponent {

  faWind = faWind;  // declared faWind for using fontawesome wind icon.

  /*
    forecastDetails is passed as input from parent component, Which is used to display hourly
    details in the view section
  */

  @Input() foreCastDetails: WeatherDetails[];
  @Input() cityName: string;
}
