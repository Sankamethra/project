import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SquareComponent } from './square/square.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"upload",component:UploadComponent},
  {path:"square",component:SquareComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
