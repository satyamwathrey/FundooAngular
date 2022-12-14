import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetForm !: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmpassword:['',[Validators.required,Validators.minLength(6)]],
    })
  }

  onSubmit(){
    if(this.resetForm.valid){
      console.log("valid data", this.resetForm.value);
      console.log("do api call");

    }
    else{
      console.log("invalid data",this.resetForm.value);
      console.log("no api call");
    }
  }

}
