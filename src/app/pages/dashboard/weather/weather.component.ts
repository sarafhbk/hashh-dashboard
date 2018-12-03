import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
@Component({
  selector: 'ngx-weather',
  styleUrls: ['./weather.component.scss'],
  templateUrl: './weather.component.html',
})

export class WeatherComponent implements OnInit {
  weather: any;
  weatherCity: any;
  currentWeather: any;
  secondWeather:any;
  thirdWeather: any;
  fourthWeather: any;
  fifthWeather: any;
  currentWeatherMain: any;
  secondWeatherMain:any;
  thirdWeatherMain: any;
  fourthWeatherMain: any;
  fifthWeatherMain: any;
  currentWeatherMainTemp: any;
  secondWeatherMainTemp:any;
  thirdWeatherMainTemp: any;
  fourthWeatherMainTemp: any;
  fifthWeatherMainTemp: any;
  currentWeatherMainTempMin: any;
  currentWeatherMainTempMax: any;
  currentWeatherWindSpeed: any;
  currentWeatherMainHumidity: any;
  date: Date;
  date2: Date;
  constructor(public config: ConfigService) {

  }

  ngOnInit() {
this.config.get_config().subscribe((data) => {
this.weather = data;
this.weatherCity = data.city;
this.currentWeather = data.list[0];
this.secondWeather = data.list[8];
this.thirdWeather = data.list[16];
this.fourthWeather = data.list[24];
this.fifthWeather = data.list[32];
this.currentWeatherMain = data.list[0].main;
this.secondWeatherMain = data.list[8].main;
this.thirdWeatherMain = data.list[16].main;
this.fourthWeatherMain = data.list[24].main;
this.fifthWeatherMain = data.list[32].main;
this.currentWeatherMainTemp = data.list[0].main.temp;
this.secondWeatherMainTemp = data.list[8].main.temp;
this.thirdWeatherMainTemp = data.list[16].main.temp;
this.fourthWeatherMainTemp = data.list[24].main.temp;
this.fifthWeatherMainTemp = data.list[32].main.temp;
this.currentWeatherMainTempMin = data.list[0].main.temp_min;
this.currentWeatherMainTempMax = data.list[0].main.temp_max;
this.currentWeatherWindSpeed = data.list[0].wind.speed;
this.currentWeatherMainHumidity = data.list[0].main.humidity;
});
this.date = new Date();

  }

}
