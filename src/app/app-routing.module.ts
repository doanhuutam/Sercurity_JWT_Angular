import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./home/login/login.component";
import {RegesterComponent} from "./home/regester/regester.component";
import {ViewComponent} from "./views/view/view.component";
import {AddProductComponent} from "./views/add-product/add-product.component";
import {EditProductComponent} from "./views/edit-product/edit-product.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegesterComponent},
  {path: 'views', component: ViewComponent},
  {path: 'add', component: AddProductComponent},
  {path: 'edit/:id', component: EditProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
