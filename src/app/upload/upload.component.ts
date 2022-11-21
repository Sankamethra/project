import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  public files:any
  public filedata:any
  alert:boolean=false

  public values:any=[{
    drawingnumber:String,
    componentname:String
  }]
  constructor(private auth:AuthenticateService) { }

  ngOnInit(): void {
  }
  getfile(event:any){
    this.files=event.target.files[0]
    console.log("Uploaded file",this.files)

  }

  file(){

    // let filereader=new FileReader();
    // filereader.readAsText(this.files)
    // filereader.onload=(e)=>{
    //   let csvdata=filereader.result?.toString()
    //   let body=csvdata
    //   console.log(typeof(body))
      this.auth.file(this.files).subscribe((res:any)=>{
        this.filedata=JSON.stringify(res)
        this.values=this.filedata
        console.log("Response data type::",typeof(this.filedata))
        this.alert=true

      })
  

    }
    closeAlert(){
      this.alert=false
    }

}
