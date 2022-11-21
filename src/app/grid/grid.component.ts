import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  userForm: FormGroup;
  public listData: any={}
  alert:boolean=false
  public data:any={}
  public gri:any=[]

  constructor(private fb:FormBuilder, private auth:AuthenticateService) {

    this.listData=[]


    this.userForm = this.fb.group ({
      drawingnumbernew : ['', Validators.required],
      componentnamenew : ['', Validators.required],
      partnamenew : ['', Validators.required],
      materialnew : ['', Validators.required],
      sequencenamenew : ['', Validators.required],
      opnnew : ['', Validators.required],
      barnew : ['', Validators.required],
      insertspecnew : ['', Validators.required],
      edgesnew : ['', Validators.required],
      edgelifenew : ['', Validators.required],
      makenew : ['', Validators.required],
      suppliernew : ['', Validators.required],
      ratenew : ['', Validators.required],
      cpcnew : ['', Validators.required],
      insertlifenew : ['', Validators.required],
      alternateinsertnew : ['', Validators.required],
      noofedgeforalternativenew : ['', Validators.required],

    })
  }

  public addItem() : void{
    this.listData.push(this.userForm.value);
    this.userForm.reset();
   }

   reset()
   {
    this.userForm.reset();
   }

   removeitem(element:any){
    this.listData.forEach((value:any,index:any)=>{
      if(value == element)
      this.listData.splice(index,1);
    })
   }
  ngOnInit(): void {
  }

  grid(){
    console.log(this.listData)
    this.auth.grid(this.listData).subscribe((res:any)=>{
      this.gri=res
      console.log(this.gri)
      this.alert=true

    })

  }
  closeAlert(){
    this.alert=false
  }

}
