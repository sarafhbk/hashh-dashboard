import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Config } from './weather';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class ConfigService {
  configUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Udumalaippettai,'
              +'in&appid=b3afa6a5bfd4ebd3b8f9b4adf28a2bfb&units=metric';
  forecastURL = 'http://api.openweathermap.org/data/2.5/forecast?q=Udumalaippettai,'
              +'in&appid=b3afa6a5bfd4ebd3b8f9b4adf28a2bfb&units=metric';
  constructor(private http: HttpClient) {
this.get_config();
   }
  get_config(): Observable<any>{
    return this.http.get<any>(this.forecastURL);
  }
}