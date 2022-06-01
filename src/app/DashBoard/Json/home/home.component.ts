import { Component, OnInit } from '@angular/core';
import data from 'src/assets/data.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor() { 
    console.log(data)
  }

  ngOnInit(): void {
  }

}
