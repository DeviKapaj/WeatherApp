import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApixuService {
  constructor(private http: HttpClient) {}
  getWeather(location: any) {
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=e59f31127ae7567ab1372c84a563c6e6&query=' +
        location
    );
  }
}
