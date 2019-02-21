import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  employee={
    fullname:"Nasser",
    Salary:111,
    date:new Date(2015,5,1)
  }

}
