import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  
})
export class UpdateComponent implements OnInit {
  public data:any={}
  public datas:any={}
  public upddat:any={}
  

  constructor(private auth:AuthenticateService) { }

  ngOnInit(): void {
  }

  update(){
    console.log(this.data)
    this.auth.getupdate(this.data).subscribe((res)=>{
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

  existdata(){
    console.log(this.data)
    this.auth.getdatanew(this.data).subscribe((res:any)=>{
      console.log(res)
      this.datas=res
    })

  }

  display = "none";
 
openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }


}
