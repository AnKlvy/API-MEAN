import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ApiService } from './services/api.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Импорт HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, // Добавление FormsModule в раздел imports
    HttpClientModule, // Добавление HttpClientModule в список импортируемых модулей
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
