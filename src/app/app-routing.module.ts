import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { UploadComponent } from './upload/upload.component';
import { GridComponent } from './grid/grid.component';
import { StartComponent } from './start/start.component';


const routes: Routes = [
  {path:'', redirectTo :'/start', pathMatch: "full"},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"upload",component:UploadComponent},
  {path:"data",component:DataComponent},
  {path:"update",component:UpdateComponent},
  {path: "grid", component: GridComponent},
  {path: "start", component: StartComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
