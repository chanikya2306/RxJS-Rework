import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './DashBoard/Addition/addition/addition.component';
import { DivisionComponent } from './DashBoard/Division/division/division.component';
import { EvenNumbersComponent } from './DashBoard/EvenNumbers/even-numbers/even-numbers.component';
import { HeaderComponent } from './DashBoard/Header/header/header.component';
import { HomeComponent } from './DashBoard/Json/home/home.component';
import { ObservableoprComponent } from './DashBoard/Observable Operater/observableopr/observableopr.component';
import { OddNumbersComponent } from './DashBoard/OddNumbers/odd-numbers/odd-numbers.component';
import { SquareNumbersComponent } from './DashBoard/SquareNimbers/square-numbers/square-numbers.component';
import { SubtractionComponent } from './DashBoard/Subtraction/subtraction/subtraction.component';

const routes: Routes = [
  {path:'',component:HeaderComponent},
  {path:'home',component:HomeComponent},
  {path:'Observable',component:ObservableoprComponent},
  {path:'add',component:AdditionComponent},
  {path:'sub',component:SubtractionComponent},
  {path:'square',component:SquareNumbersComponent},
  {path:'divison',component:DivisionComponent},
  {path:'evennum',component:EvenNumbersComponent},
  {path:'oddnum',component:OddNumbersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
