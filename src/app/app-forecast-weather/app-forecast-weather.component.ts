import { Component, Input, OnInit } from '@angular/core';

import { WeatherDetails } from '../model/weatherInfo';

@Component({
  selector: 'app-app-forecast-weather',
  templateUrl: './app-forecast-weather.component.html',
  styleUrls: ['./app-forecast-weather.component.scss']
})
export class AppForecastWeatherComponent implements OnInit {
  constructor() { }

  @Input() foreCastDetails: WeatherDetails[];

  ngOnInit(): void {
    console.log('Child forecast', this.foreCastDetails);
  }

}
