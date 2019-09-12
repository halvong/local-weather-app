AngularJS 6 Enterprise Web Appl, Packtpub Book 
LocalWeatherApp
9/12/2019, Thurs

chp6, searching with user input

#url
http://localhost:4200/

#commands
1. npx ng g component current-weather
2. npx ng generate interface ICurrentWeather
3. npx ng g s weather --flat false
4. https://samples.openweathermap.org/data/2.5/weather?q=Bethesda,US&appid=b1b15e88fa797225412429c1c50c122a1
4b. http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1
5. npm install --save--dev cross-conf-env
6. npm run docker:build
7. npm run docker:debug
8. npx ng add @angular/material   --chp5
9. npm i @angular/flex-layout   
10. ng generate @angular/material:material-nav --name=side-nav --skip-import 



#link
https://subscription.packtpub.com/book/web_development/9781786462909/2/ch02lvl1sec24/using-angular-services-and-httpclient-to-retrieve-data

#path
cd /home/hal/Documents/softwares/pro-pycharm/workspace/angularJS/local-weather-app

#schema
app.module.ts <- app.component.ts <- current-weather.component.ts
                 interfaces.ts         
                 material.module.ts
                
#commands
npm start
npm test

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

