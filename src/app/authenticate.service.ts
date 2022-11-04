import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  public data:any


  constructor(private http:HttpClient) { }

  register(data:any=[]){
    console.log(data)
    return this.http.post<any[]>("http://localhost:3000/api/register",data)

  }

  login(data:any=[]){
    console.log(data)
    return this.http.post<any[]>("http://localhost:3000/api/login",data)

  }
}
