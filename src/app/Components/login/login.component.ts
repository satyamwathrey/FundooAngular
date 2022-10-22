import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      console.log("valid data", this.loginForm.value);
      console.log("do api call");

      let data={
        Email:this.loginForm.value.email,
        Password:this.loginForm.value.password
      }
    }
    else{
      console.log("invalid data",this.loginForm.value);
      console.log("no api call");
    }

  }
}
