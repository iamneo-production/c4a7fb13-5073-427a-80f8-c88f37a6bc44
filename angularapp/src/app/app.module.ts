import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './components/home-page/home-page.component';

import { HeaderComponent } from './components/header/header.component';

import { LoginComponent } from './components/login-Register/login/login.component';
import { RegisterComponent } from './components/login-Register/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminDashComponent } from './components/admin/admin-dash/admin-dash.component';
import { AdminNavComponent } from './components/admin/admin-nav/admin-nav.component';
import { CustomerDeleteComponent } from './components/admin/CustomerManagement/customer-delete/customer-delete.component';
import { CustomerViewComponent } from './components/admin/CustomerManagement/customer-view/customer-view.component';
import { CustomerListComponent } from './components/admin/CustomerManagement/customer-list/customer-list.component';
import { CustomerDashComponent } from './components/customer/customer-dash/customer-dash.component';
import { CustomerNavComponent } from './components/customer/customer-nav/customer-nav.component';
import { CustomerUpdateComponent } from './components/customer/customer-update/customer-update.component';
import { AdminUpdateComponent } from './components/admin/admin-update/admin-update.component';
import { AddThemeComponent } from './components/admin/theme/add-theme/add-theme.component';
import { DeleteThemeComponent } from './components/admin/theme/delete-theme/delete-theme.component';
import { UpdateThemeComponent } from './components/admin/theme/update-theme/update-theme.component';
import { ThemeListComponent } from './components/admin/theme/theme-list/theme-list.component';
import { ViewThemeComponent } from './components/admin/theme/view-theme/view-theme.component';
import { ReviewAddComponent } from './components/Review/review-add/review-add.component';
import { ReviewDeleteComponent } from './components/Review/review-delete/review-delete.component';
import { ReviewUpdateComponent } from './components/Review/review-update/review-update.component';
import { ReviewListComponent } from './components/Review//review-list/review-list.component';
import { AddOnComponent } from './components/admin/add-on/add-on.component';
import { AddComponent } from './components/admin/menu/add/add.component';
import { MainComponent } from './components/admin/menu/main/main.component';
import { ReviewShowComponent } from './components/admin/review-show/review-show.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    
    HeaderComponent,
   
    
    
    LoginComponent,
    RegisterComponent,
    AdminDashComponent,
    AdminNavComponent,
    CustomerDeleteComponent,
    CustomerViewComponent,
    CustomerListComponent,
    CustomerDashComponent,
    CustomerNavComponent,
    CustomerUpdateComponent,
    AdminUpdateComponent,
    AddThemeComponent,
    DeleteThemeComponent,
    UpdateThemeComponent,
    ThemeListComponent,
    
    ViewThemeComponent,
    
    ReviewAddComponent,
    
    ReviewDeleteComponent,
    
    ReviewUpdateComponent,
    
    ReviewListComponent,
    
    AddOnComponent,
    
    AddComponent,
    
    MainComponent,
    
    ReviewShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule ,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
