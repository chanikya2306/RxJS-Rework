import { Component, OnInit } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.scss']
})
export class SubtractionComponent implements OnInit {
  values:any;
  listofvalues:any=[];
  constructor() { }

  ngOnInit(): void {
    const k=of(1,2,3,4,5,6,7,8,9);
    const additionNumber = map((val:number)=>val-1);
    const addition_Value = additionNumber(k);
    addition_Value.subscribe((data)=>{
      console.log(data);
      this.values=data;
      this.listofvalues.push(this.values);
    })
  }


}
