import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login-Register/login/login.component';
import { RegisterComponent } from './components/login-Register/register/register.component';
import { CustomerUpdateComponent } from './components/customer/customer-update/customer-update.component';
import { CustomerDeleteComponent } from './components/admin/CustomerManagement/customer-delete/customer-delete.component';
import { CustomerListComponent } from './components/admin/CustomerManagement/customer-list/customer-list.component';
import { CustomerViewComponent } from './components/admin/CustomerManagement/customer-view/customer-view.component';
import { AdminDashComponent } from './components/admin/admin-dash/admin-dash.component';
import { CustomerDashComponent } from './components/customer/customer-dash/customer-dash.component';
import { AdminUpdateComponent } from './components/admin/admin-update/admin-update.component';
import { ThemeListComponent } from './components/admin/theme/theme-list/theme-list.component';
import { DeleteThemeComponent } from './components/admin/theme/delete-theme/delete-theme.component';
import { UpdateThemeComponent } from './components/admin/theme/update-theme/update-theme.component';
import { AddThemeComponent } from './components/admin/theme/add-theme/add-theme.component';
import {ViewThemeComponent} from './components/admin/theme/view-theme/view-theme.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent},
  {path:"admin" , //canActivate :[AdminGuard] ,
  children :[
    { path: "dashboard", component: AdminDashComponent },
    { path: "viewCustomer/:id", component:CustomerViewComponent  } ,
    { path: "editAdmin/:id", component: AdminUpdateComponent },
    { path: "getCustomer", component: CustomerListComponent },
    { path: "deleteCustomer/:id", component: CustomerDeleteComponent },
    { path: "getTheme", component: ThemeListComponent },
    { path: "addTheme", component: AddThemeComponent },
    { path: "deleteTheme/:id", component: DeleteThemeComponent },
    { path: "editTheme/:id", component: UpdateThemeComponent },
    { path: "viewTheme/:id", component: ViewThemeComponent }
    
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
