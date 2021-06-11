// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  currentWeatherApiUrl: 'https://api.openweathermap.org/data/2.5/weather?',
  hourlyForecastApiUrl: 'https://api.openweathermap.org/data/2.5/onecall?',
  apiKey: 'c59255fb8732a88c3c01f59d528e1340',
  cityList: ['london', 'berlin', 'amsterdam', 'paris', 'brussels']
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
