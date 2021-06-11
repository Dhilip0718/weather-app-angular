# AngularWeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Features: 

The EURO WEATHER web app has the features to display the current weather and forecast details of top 5 Europiean cities namely 1. London 2.Berlin 3.Amsterdam 4.Paris 5.Brussels

The user can select any of the 5 weather cards displayed to them and see the hourly forecast for the next 3 days.


## Component Spec

On ng serve the web app loads and auto redirects to /home path http://localhost:4200/home.

**Parent component** - app-current-weather

The component loads the weather details of top 5 Europiean cities.
Additional information about the component is provided as comments in the component.

**Child Component** - app-forecast-weather
Action: User makes a selection among the 5 EU cities.
Display: Hourly forecast is displayed for the next three days for the selected city.
Additional information about the component is provided as comments in the component.

