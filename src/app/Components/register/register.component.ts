import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm !: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', Validators.required],
    })
  }


  onSubmit(){
    if(this.registerForm.valid){
      console.log("valid data", this.registerForm.value);
      console.log("do api call");

      let data={
    
        FirstName:this.registerForm.value.firstname,
        LastName:this.registerForm.value.lastname,
        Email:this.registerForm.value.email,
        Password:this.registerForm.value.password
      }
     
    }
    else{
      console.log("invalid data",this.registerForm.value);
      console.log("no api call");
    }
  }
}  