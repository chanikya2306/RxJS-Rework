import { Component, OnInit } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent implements OnInit {
  values:any;
  listofvalues:any=[];
  constructor() { }

  ngOnInit(): void {
    const k = of(1,2,3,4,5,6,7,8,9);
    const SquareNums = map((val:number)=>val/2);
    const Squared_Value = SquareNums(k);
    Squared_Value.subscribe((data)=>{
      console.log(data);
      this.values=data;
      this.listofvalues.push(this.values);
    });
  }

}
