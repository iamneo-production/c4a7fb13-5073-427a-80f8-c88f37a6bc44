import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './components/login-Register/login/login.component';
import { RegisterComponent } from './components/login-Register/register/register.component';

import { MainComponent } from './admin/menu/main/main.component';
import { AddComponent } from './admin/menu/add/add.component';
import { CustomerMenuComponent } from './customer/customer-menu/customer-menu.component';
import { AddOnComponent } from './admin/add-on/add-on.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },

  { path: "admin/menu", component: MainComponent },
  { path: "admin/menu/:id", component: AddComponent },
  { path: "admin/addOn", component: AddOnComponent },
  
  { path: "customer/menu", component: CustomerMenuComponent },
  
  { path: "", component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
