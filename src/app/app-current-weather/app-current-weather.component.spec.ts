import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { CurrentWeatherDetails, WeatherDetails } from '../model/weatherInfo';
import { FetchWeatherDetailsService } from '../services/fetch-weather-details.service';

import { AppCurrentWeatherComponent } from './app-current-weather.component';

class AppCurrentWeatherPage {
  componentDebugElement: DebugElement;
  component: AppCurrentWeatherComponent;

  constructor(fixture: ComponentFixture<AppCurrentWeatherComponent>) {
    this.component = fixture.componentInstance;
    this.componentDebugElement = fixture.debugElement;
  }

  locationCards(): DebugElement[] {
    return this.componentDebugElement.queryAll(By.css('.location-container'));
  }

  temperatureInfo(): DebugElement[] {
    return this.componentDebugElement.queryAll(By.css('.temperature-info div span'));
  }
}
describe('AppCurrentWeatherComponent', () => {
  let page: AppCurrentWeatherPage;
  let fixture: ComponentFixture<AppCurrentWeatherComponent>;
  let fetchWeatherDetailsService: FetchWeatherDetailsService;
  const fetchWeatherDetailsServiceMock = {
    getWeatherDetails(): Observable<CurrentWeatherDetails>[] {
      return [of(getWeatherDetailsMock())];
    },
    getForecast(): Observable<WeatherDetails[]> {
      return of(getForecastDetails());
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: FetchWeatherDetailsService,
          useValue: fetchWeatherDetailsServiceMock,
        },
      ],
      declarations: [AppCurrentWeatherComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCurrentWeatherComponent);
    page = new AppCurrentWeatherPage(fixture);
    fixture.detectChanges();

    fetchWeatherDetailsService = TestBed.inject(FetchWeatherDetailsService);
  });

  it('should fetch the weather details on load', () => {
    fixture.detectChanges();

    expect(page.component.weatherDetails).toEqual([getWeatherDetailsMock()]);
    expect(page.locationCards().length).toBe(1);
  });

  it('should fetch the forcast details on click of a city card', () => {
    spyOn(fetchWeatherDetailsService, 'getForecast').and.returnValue(of(getForecastDetails()));
    fixture.detectChanges();

    page.locationCards()[0].nativeElement.click();

    expect(page.component.currentCityName).toBe('Madrid');
    expect(fetchWeatherDetailsService.getForecast).toHaveBeenCalledWith(40.4165, -3.7026);
  });

  it('should display the weather in a formatted way', () => {
    fixture.detectChanges();

    expect(page.temperatureInfo().length).toBe(4);
    expect(page.temperatureInfo()[0].nativeElement.innerHTML.trim()).toContain(31.1);
    expect(page.temperatureInfo()[1].nativeElement.innerHTML.trim()).toContain(29.3);
  });
});

function getWeatherDetailsMock(): CurrentWeatherDetails {
  return {
    coord: {
      lon: -3.7026,
      lat: 40.4165,
    },
    weather: [
      {
        description: 'few clouds',
        icon: '02d',
      },
    ],
    main: {
      temp: 31.05,
      feels_like: 29.26,
      humidity: 23,
    },
    wind: {
      speed: 0.45,
      deg: 225,
    },
    name: 'Madrid',
  };
}

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
  }];
}
