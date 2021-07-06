import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiKey } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  GetWeather(cityName: string): Observable<any>{
   return this._http.get<any>(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ApiKey}`)
    
  }
}
