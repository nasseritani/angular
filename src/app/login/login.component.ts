import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  from=new FormGroup({email:new FormControl("",Validators.required),
password:new FormControl("",Validators.required)});

  constructor() { }

  ngOnInit() {
  }
  log(email){
    console.log(email);
  }
  get email(){
return this.from.get('email');
  }
 get password(){
return this.from.get('password');
  }
}
