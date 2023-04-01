import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { SuccessLoginComponent } from './success-login/success-login.component';


const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'success-login', component:SuccessLoginComponent},
  {path: 'forget-password', component: ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
