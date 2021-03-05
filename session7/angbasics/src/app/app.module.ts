import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomercardviewComponent } from './customercardview/customercardview.component';
import { CustomersComponent } from './customers/customers.component';
import { RouterModule, Routes } from '@angular/router';
import { Sample1Component } from './sample1/sample1.component';
import { SamplemoduleModule } from './samplemodule/samplemodule.module';


@NgModule({
  declarations: [
    AppComponent,
    CustomercardviewComponent,
    CustomersComponent,
    Sample1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SamplemoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
