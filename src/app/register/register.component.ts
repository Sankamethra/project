import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public data:any={}
  public datas:any=[]

  constructor(private auth:AuthenticateService,private route:Router) { }

  ngOnInit(): void {
  }
  reg(){
    console.log(this.data)
    this.auth.register(this.data).subscribe((res:any)=>{
      this.datas=res
      console.log(this.datas)
      setInterval(()=>{this.route.navigate(['/login'])},3000
      )
      

    })
    
  

  }
}
