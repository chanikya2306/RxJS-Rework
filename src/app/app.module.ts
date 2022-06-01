import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableoprComponent } from './DashBoard/Observable Operater/observableopr/observableopr.component';
import { AdditionComponent } from './DashBoard/Addition/addition/addition.component';
import { DivisionComponent } from './DashBoard/Division/division/division.component';
import { EvenNumbersComponent } from './DashBoard/EvenNumbers/even-numbers/even-numbers.component';
import { OddNumbersComponent } from './DashBoard/OddNumbers/odd-numbers/odd-numbers.component';
import { SquareNumbersComponent } from './DashBoard/SquareNimbers/square-numbers/square-numbers.component';
import { SubtractionComponent } from './DashBoard/Subtraction/subtraction/subtraction.component';
import { HomeComponent } from './DashBoard/Json/home/home.component';
import { HeaderComponent } from './DashBoard/Header/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableoprComponent,
    AdditionComponent,
    DivisionComponent,
    EvenNumbersComponent,
    OddNumbersComponent,
    SquareNumbersComponent,
    SubtractionComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
