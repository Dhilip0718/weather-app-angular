import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCurrentWeatherComponent } from './app-current-weather.component';

describe('AppCurrentWeatherComponent', () => {
  let component: AppCurrentWeatherComponent;
  let fixture: ComponentFixture<AppCurrentWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCurrentWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
