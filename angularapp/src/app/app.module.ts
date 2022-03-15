import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login-Register/login/login.component';
import { RegisterComponent } from './components/login-Register/register/register.component';
import { HomePageComponent } from './home-page/home-page.component';

import { AllServiceService } from './services/all-service.service';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AllServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
