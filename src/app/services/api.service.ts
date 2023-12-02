import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getWeather(_longitude_latitude: any) {
    return this.http.post(`${this.apiUrl}/getWeather`, _longitude_latitude);
  }

}
