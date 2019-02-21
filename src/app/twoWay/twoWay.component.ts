import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoWay',
  templateUrl: './twoWay.component.html',
  styleUrls: ['./twoWay.component.css']
})
export class TwoWayComponent implements OnInit {

  onKeyUp(firstname){
    alert(firstname);
  }
  constructor() { }

  ngOnInit() {
  }

}
