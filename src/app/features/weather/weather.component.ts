import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WeatherService } from 'src/app/core/services/weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  cityName!: string;
  resultWeather!: any;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  openWeatherCity = new FormControl('');

  getCityName(){
    this.cityName = this.openWeatherCity.value;
    this.getWeatherFromCity();
  }

  getWeatherFromCity(){
    this._weatherService.GetWeather(this.cityName).subscribe(result => {
      console.log(result);
      this.resultWeather = result;
    });
  }


  

}
