import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  weatherData: any[] = [];
  newLatitude: number = 0; 
  newLongitude: number = 0;
  newNote: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadWeatherData();
  }

  loadWeatherData(): void {
    this.apiService.getWeatherData().subscribe(data => {
      this.weatherData = data;
    });
  }

  addWeather(): void {
    this.apiService.addWeatherData(this.newLatitude, this.newLongitude, this.newNote).subscribe(() => {
      this.loadWeatherData();
    });
  }

  updateNote(index: number, newNote: string): void {
    this.apiService.updateNote(index, newNote).subscribe(() => {
      this.loadWeatherData();
    });
  }

  deleteWeather(index: number): void {
    this.apiService.deleteWeatherData(index).subscribe(() => {
      this.loadWeatherData();
    });
  }

  getTemperature(temperatures: number[]): number | undefined {
    return temperatures.length > 0 ? temperatures[0] : undefined;
  }

}
