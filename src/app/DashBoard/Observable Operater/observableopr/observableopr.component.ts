import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observableopr',
  templateUrl: './observableopr.component.html',
  styleUrls: ['./observableopr.component.scss']
})
export class ObservableoprComponent implements OnInit {
  scores: Observable<string>;
  showmsg:any=[];
  constructor() {
    this.scores = new Observable(
      (commentary) => {
        commentary.next('1');
        commentary.next('2');
        commentary.next('3');
        commentary.next('4');
        commentary.next('5');
        commentary.next('6');
      }
    );

  }
  ngOnInit(): void {
    this.scores.subscribe((data) => {
      console.log(data);
      this.showmsg.push(data)
    });
  }
}