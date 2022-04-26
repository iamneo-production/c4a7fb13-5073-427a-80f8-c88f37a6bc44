import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddonService } from './addon.service';
import { HttpClientModule } from '@angular/common/http';import { FormsModule } from '@angular/forms';
import { AddOnComponent } from './admin/add-on/add-on.component';

@NgModule({
  declarations: [
    AppComponent,
    AddOnComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule
  ],
  providers: [AddonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
