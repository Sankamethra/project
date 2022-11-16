import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public data:any={}
  public datas:any={}
  public upddat:any={}

  getdatanew = {
    drawingnumber : "",
    componentname : "",
    partname : "",
    material : "",
    sequencename : "",
    opn : "",
    bar : "",
    insertspec : "",
    edge : "",
    edgelife : "",
    make : "",
    supplier : "",
    rate : "",
    insertlife : "",
    alternativeedge : "",
    noofedgeforalternative : ""
  }

  constructor(private auth:AuthenticateService) { }

  ngOnInit(): void {
  }

  update(){
    console.log(this.data)
    this.auth.getupdate(this.getdatanew).subscribe((res)=>{
      this.upddat=res
    })
  }

  get(){
    console.log(this.data)
    this.auth.getdata(this.data).subscribe((res:any)=>{
      console.log(res)
      this.datas=res

    })

  } 

  getnew(dat: any){
    this.getdatanew=dat;
  }


}
