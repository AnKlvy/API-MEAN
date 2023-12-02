import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  weather: any[] = [];
  form: FormGroup;
  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    ) {
      this.form = this.formBuilder.group({
        longitude: '',
        latitude: ''
      });
     }

    onSubmit() {
      if (this.form.valid) {
        const longitude_latitude = this.form.value;
        
        // Пример отправки данных с использованием HttpClient
  this.apiService.getWeather(longitude_latitude).subscribe(
    () => {
      console.log('Погода успешно получена:');
      // Вы можете выполнить дополнительные действия после успешной регистрации
    },
    (error: any) => {
      console.log(longitude_latitude)
      console.error('Ошибка при получении погоды:', error);
      // Обработайте ошибку, например, показав сообщение об ошибке на фронтенде
    }
  );
  
      }
    }
}
