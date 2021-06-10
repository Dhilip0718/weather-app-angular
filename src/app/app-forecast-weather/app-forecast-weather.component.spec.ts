import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppForecastWeatherComponent } from './app-forecast-weather.component';

describe('AppForecastWeatherComponent', () => {
  let component: AppForecastWeatherComponent;
  let fixture: ComponentFixture<AppForecastWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppForecastWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppForecastWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
