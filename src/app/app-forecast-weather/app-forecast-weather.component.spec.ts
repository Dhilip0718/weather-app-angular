import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { WeatherDetails } from '../model/weatherInfo';

import { AppForecastWeatherComponent } from './app-forecast-weather.component';

@Component({
  template: '<app-forecast-weather [foreCastDetails]="foreCastDetails" [cityName]="cityName"></app-forecast-weather>'
})
class AppForecastWeatherTestComponent {
  @Input()
  foreCastDetails: WeatherDetails[];
  @Input()
  cityName: string;
}

describe('AppForecastWeatherComponent', () => {
  let fixture: ComponentFixture<AppForecastWeatherTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppForecastWeatherTestComponent, AppForecastWeatherComponent ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppForecastWeatherTestComponent);
  });

  it('should render forecast details in a list', () => {
    fixture.componentInstance.foreCastDetails = getForecastDetails();

    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('.forecast-container')).length).toBe(2);
  });

  it('should render the city name in the title', () => {
    fixture.componentInstance.foreCastDetails = getForecastDetails();
    fixture.componentInstance.cityName = 'London';

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('h6')).nativeElement.innerHTML.trim()).toBe('Hourly Forecast for London');
  });
});

function getForecastDetails(): WeatherDetails[] {
  return [{
    dt: 1623171600,
    temp: 293.31,
    feels_like: 293.55,
    humidity: 83,
    weather: [
      {
        description: 'broken clouds',
        icon: '04n'
      }
    ]
  }, {
    dt: 1623171600,
    temp: 293.31,
    feels_like: 293.55,
    humidity: 83,
    weather: [
      {
        description: 'broken clouds',
        icon: '04n'
      }
    ]
  }];
}
