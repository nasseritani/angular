import { Component, OnInit } from '@angular/core';
import { DBServiceService } from './../dbService.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  courses;
  constructor( dbService: DBServiceService) {
this.courses=dbService.getAll();
   }

  ngOnInit() {
  }

}
