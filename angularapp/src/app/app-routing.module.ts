import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './components/login-Register/login/login.component';
import { RegisterComponent } from './components/login-Register/register/register.component';
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
  { path: "", component: HomePageComponent },
  {path: "admin/addTheme", component: AddThemeComponent},
  {path: "test", component: WrapperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
