import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgetForm !: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.forgetForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
    })
  }

  onSubmit(){
    if(this.forgetForm.valid){
      console.log("valid data", this.forgetForm.value);
      console.log("do api call");

      let data={
        email:this.forgetForm.value.email
      }
    }
    else{
      console.log("invalid data",this.forgetForm.value);
      console.log("no api call");
    }
  }

}
