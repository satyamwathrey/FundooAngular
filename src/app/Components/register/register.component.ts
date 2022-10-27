import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm !: FormGroup;
  constructor(private fb: FormBuilder,private user:UserService) { }

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
    
        firstName:this.registerForm.value.firstname,
        lastName:this.registerForm.value.lastname,
        email:this.registerForm.value.email,
        password:this.registerForm.value.password
      }
      this.user.register(data).subscribe((result:any)=>{
        console.log(result);
      });
    }
    else{
      console.log("invalid data",this.registerForm.value);
      console.log("no api call");
    }
  }
}  