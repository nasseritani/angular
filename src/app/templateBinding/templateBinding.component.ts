import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateBinding',
  templateUrl: './templateBinding.component.html',
  styleUrls: ['./templateBinding.component.css']
})
export class TemplateBindingComponent implements OnInit {
nameVal;
  constructor() { }

  ngOnInit() {
  }
onKeyUp(firstname){
  this.nameVal=firstname.value;
}
}
