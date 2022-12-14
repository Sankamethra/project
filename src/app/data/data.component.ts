import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  public data:any={}
  public datas:any=[]


  constructor(private auth:AuthenticateService) { }

  ngOnInit(): void {
  }

  get(){
    console.log(this.data)
    this.auth.getdata(this.data).subscribe((res:any)=>{
      console.log(res)
      this.datas=res

    })

  } 

}