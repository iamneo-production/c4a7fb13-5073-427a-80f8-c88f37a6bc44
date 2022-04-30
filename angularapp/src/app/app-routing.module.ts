import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './components/login-Register/login/login.component';
import { RegisterComponent } from './components/login-Register/register/register.component';
import { CustomerUpdateComponent } from './components/customer/customer-update/customer-update.component';
import { CustomerDeleteComponent } from './components/admin/CustomerManagement/customer-delete/customer-delete.component';
import { CustomerListComponent } from './components/admin/CustomerManagement/customer-list/customer-list.component';
import { CustomerViewComponent } from './components/admin/CustomerManagement/customer-view/customer-view.component';
import { AdminDashComponent } from './components/admin/admin-dash/admin-dash.component';
import { CustomerDashComponent } from './components/customer/customer-dash/customer-dash.component';
import { AdminUpdateComponent } from './components/admin/admin-update/admin-update.component';
import { MainComponent } from './admin/menu/main/main.component';
import { AddComponent } from './admin/menu/add/add.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import { AddThemeComponent } from './components/admin/add-theme/add-theme.component';
import { WrapperComponent } from './components/admin/wrapper/wrapper.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent},
  {path: "admin", component: DashboardComponent},
  { path: "admin/menu", component: MainComponent},
  {path: "admin/menu/:id", component: AddComponent},
  {path: "admin/theme", component: WrapperComponent},
  {path: "admin/addTheme", component: AddThemeComponent},
  { path: "", component: HomePageComponent },
  {path:"admin" , //canActivate :[AdminGuard] ,
  children :[
    { path: "dashboard", component: AdminDashComponent },
    { path: "viewCustomer/:id", component:CustomerViewComponent  } ,
    { path: "editAdmin/:id", component: AdminUpdateComponent },
    { path: "getCustomer/:id", component: CustomerListComponent },
    { path: "deleteCustomer/:id", component: CustomerDeleteComponent },
  
  ]},
  {path:"customer",
  children :[
  {path: "dashboard", component: CustomerDashComponent},
  {path: "editCustomer/:id", component: CustomerUpdateComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
