import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./home/login/login.component";
import {RegesterComponent} from "./home/regester/regester.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegesterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
