import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public data:any={}
  public dat:any

  constructor(private auth:AuthenticateService,private route:Router) { }

  ngOnInit(): void {
  }

  log(){
    console.log(this.data)
    this.auth.login(this.data).subscribe((res:any)=>{
      this.dat=res
      console.log(this.dat)
      this.route.navigate(['/data'])
    })
  }

}
