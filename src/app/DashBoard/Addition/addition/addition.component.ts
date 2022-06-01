import { Component, OnInit } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.scss']
})
export class AdditionComponent implements OnInit {
  array:any=[];
  values:any;
  constructor() { }

  ngOnInit(): void {
    const k=of(1,2,3,4,5,6,7,8,9);
    const additionNumber = map((val:number)=>val+1);
    const addition_Value = additionNumber(k);
    addition_Value.subscribe((data)=>{
      console.log(data);
      this.values=data;
      this.array.push(this.values);
    })
 
  }

}
