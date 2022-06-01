import { Component, OnInit } from '@angular/core';
import { filter, of } from 'rxjs';

@Component({
  selector: 'app-odd-numbers',
  templateUrl: './odd-numbers.component.html',
  styleUrls: ['./odd-numbers.component.scss']
})
export class OddNumbersComponent implements OnInit {
  values:any;
  listofvalues:any=[];
  constructor() { }

  ngOnInit(): void {
    const k = of(1,2,3,4,5,6,7,8,9);
    const SquareNums = filter((x:number)=>x%2!==0);
    const Squared_Value = SquareNums(k);
    Squared_Value.subscribe((data)=>{
      console.log(data);
      this.values=data;
      this.listofvalues.push(this.values);
    });
  }

}
