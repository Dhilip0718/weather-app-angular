import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { CurrentWeatherDetails, WeatherDetails, WeatherForecastDetails } from '../model/weatherInfo';

@Injectable({
  providedIn: 'root'
})
export class FetchWeatherDetailsService {
  currentDay: number;
  constructor(private http: HttpClient) {
    this.currentDay = new Date().getDate();
   }
  getWeatherDetails(): Observable<CurrentWeatherDetails>[] {
    const apiKey = environment.apiKey;
    const cityList = environment.cityList;
    const apiUrl = environment.currentForecastApiUrl;
    const response = cityList.map((city) =>
      this.http.get<CurrentWeatherDetails>(
        `${apiUrl}q=${city}&units=metric&appid=${apiKey}`
      )
    );
    return response;
  }

  getForecast(lat: number, lon: number): Observable<WeatherDetails[]> {
    const apiKey = environment.apiKey;
    const apiUrl = environment.hourlyForecastApiUrl;
    const response = this.http.get<WeatherForecastDetails>(
      `${apiUrl}lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,daily,alerts&appid=${apiKey}`
    )
    .pipe(
      mergeMap(res => res.hourly),
      map(hour => {
        hour.isDayStart = this.isDayStart(hour.dt);
        return hour;
      }),
      toArray()
    );
    return response;
  }

  isDayStart(timestamp: number): boolean {
    const inputDay = new Date(timestamp * 1000).getDate();
    if (this.currentDay === inputDay) {
      this.currentDay++;
      return true;
    }
    return false;
  }
}
