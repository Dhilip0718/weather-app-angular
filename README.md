# AngularWeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Component Spec

On ng serve the web app loads and auto redirects to /home path http://localhost:4200/home.

Parent component - app-current-weather
The component loads the weather details of top 5 Europiean cities.
Additional information about the component is provided as comments in the component.

Child Component - app-forecast-weather
Action: User makes a selection among the 5 EU cities.
Display: Hourly forecast is displayed for the next three days for the selected city.
Additional information about the component is provided as comments in the component.

