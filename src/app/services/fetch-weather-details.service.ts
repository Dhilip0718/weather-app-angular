import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { CurrentWeatherDetails, WeatherDetails, WeatherForecastDetails } from '../model/weatherInfo';

/*

  FetchWeatherDetails service to make the below api calls:
  1. getWeatherDetails - To iterate thorough the list of provided cities and
     make the api call to openweather endpoint and return an array of Observable.

  2. getForecastDetails -  The latitude and longitude of the selected city is passed as an argument with
     which we make the api call.

*/
@Injectable()
export class FetchWeatherDetailsService {
  currentDay: number;
  apiKey: string;

  constructor(private http: HttpClient) {
    this.currentDay = new Date().getDate();
    this.apiKey = environment.apiKey;
  }
  getWeatherDetails(): Observable<CurrentWeatherDetails>[] {
    const cityList = environment.cityList;
    const apiUrl = environment.currentWeatherApiUrl;
    const response = cityList.map((city) =>
      this.http.get<CurrentWeatherDetails>(
        `${apiUrl}q=${city}&units=metric&appid=${this.apiKey}`
      )
    );
    return response;
  }

  /*
     getForecast - The latitude and longitude of the selected city is passed as an argument with
     which we make the api call.
     Inorder to avoid displaying date for every result record, we are performing few additional checks
     using pipe to achieve the goal.
  */
  getForecast(lat: number, lon: number): Observable<WeatherDetails[]> {
    const apiUrl = environment.hourlyForecastApiUrl;
    const response = this.http.get<WeatherForecastDetails>(
      `${apiUrl}lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,daily,alerts&appid=${this.apiKey}`
    )
    .pipe(
      mergeMap(res => res.hourly),
      map(hourly => {
        hourly.isDayStart = this.isDayStart(hourly.dt);
        return hourly;
      }),
      toArray()
    );
    return response;
  }

  /*
    isDayStart - Is used to hide the repeated occurence of current Date and future dates.
  */
  private isDayStart(timestamp: number): boolean {
    const inputDay = new Date(timestamp * 1000).getDate();
    if (this.currentDay === inputDay) {
      this.currentDay++;
      return true;
    }
    return false;
  }
}
