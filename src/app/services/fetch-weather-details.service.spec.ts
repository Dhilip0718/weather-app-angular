import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FetchWeatherDetailsService } from './fetch-weather-details.service';
import { WeatherDetails } from '../model/weatherInfo';

describe('FetchWeatherDetailsService', () => {
  let fetchWeatherDetailsService: FetchWeatherDetailsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchWeatherDetailsService],
      imports: [HttpClientTestingModule]
    });
    fetchWeatherDetailsService = TestBed.inject(FetchWeatherDetailsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(fetchWeatherDetailsService).toBeTruthy();
  });

  // it('should invoke getWeatherDetails and give response with 5 Observables', () => {
  //   const weatherDetails = fetchWeatherDetailsService.getWeatherDetails();
  //   expect(weatherDetails.length).toBe(5);
  // });

  it('should invoke getForecast and provide response', () => {
    const returnValue = [
      {
        temp: 27.99
      },
      {
        temp: 27.99
      }
    ] as WeatherDetails[];

    fetchWeatherDetailsService.getForecast(51.5085, 51.5085).subscribe(res => {
      expect(res).toBe(returnValue);
    });
    const testRequest = httpTestingController.expectOne({url: 'https://api.openweathermap.org/data/2.5/onecall?lat=51.5085&lon=51.5085&units=metric&exclude=current,minutely,daily,alerts&appid=c59255fb8732a88c3c01f59d528e1340', method: 'GET'});
    testRequest.flush(returnValue);
    httpTestingController.verify();
  });
});
