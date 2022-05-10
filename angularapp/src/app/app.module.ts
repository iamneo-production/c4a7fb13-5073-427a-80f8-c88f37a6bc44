import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login-Register/login/login.component';
import { RegisterComponent } from './components/login-Register/register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { MainComponent } from './admin/menu/main/main.component';

import { AllServiceService } from './services/all-service.service';
import {AdminServiceService} from './services/admin/admin-service.service';
import { AddComponent } from './admin/menu/add/add.component';
import { CustomerNavbarComponent } from './customer/customer-navbar/customer-navbar.component';
import { CustomerMenuComponent } from './customer/customer-menu/customer-menu.component';

import { AddonService } from './addon.service';
import { AddOnComponent } from './admin/add-on/add-on.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerAddOnComponent } from './customer/customer-add-on/customer-add-on.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    NavbarComponent,
    MainComponent,
    AddComponent,
    CustomerNavbarComponent,
    CustomerMenuComponent,
    AddOnComponent,
    CustomerAddOnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AllServiceService,AdminServiceService,AddonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
