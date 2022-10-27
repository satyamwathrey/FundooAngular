import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpService) { }


  register(data:any){
    console.log(data);

    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.http.postService('https://localhost:44304/api/register',data,false,header)
  }

  login(data:any){
    console.log(data);

    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.http.postService('https://localhost:44304/api/login',data,false,header)
  }

  forgotpass(data:any){
    console.log(data);

    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.http.postService(`https://localhost:44304/api/forgot/${data.email}`,data,false,header)
  }

  resetpassword(){
   
  }
}
