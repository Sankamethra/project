import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  public data:any={}
  public datas:any=[]
  public upddat:any={}

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
