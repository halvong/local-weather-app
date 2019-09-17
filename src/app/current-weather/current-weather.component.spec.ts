<<<<<<< HEAD
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CurrentWeatherComponent } from './current-weather.component'
import {WeatherService} from '../weather/weather.service';
import {WeatherServiceFake} from '../weather/weather.service.fake';

======
=
import {ComponentFixture, TestBed, async} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material.module';
import {WeatherService} from '../weather/weather.service';
import {WeatherServiceFake} from '../weather/weather.service.fake';
import {CurrentWeatherComponent} from './current-weather.component';

>>>>>>>
dev;

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent
  let fixture: ComponentFixture<CurrentWeatherComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [CurrentWeatherComponent],
      < <<<<<< HEAD
        providers: [{ provide: WeatherService, useClass: WeatherServiceFake}],
  ======
    =
      providers;
  :
    [{provide: WeatherService, useClass: WeatherServiceFake}],
      imports;
  :
    [MaterialModule, NoopAnimationsModule],
  >>>>>>>
    dev;
  }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
