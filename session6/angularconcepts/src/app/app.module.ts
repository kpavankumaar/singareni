import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { FormsModule } from '@angular/forms';
import { ChoiceDirective } from './directives/choiceDirective';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ChoiceDirective,
    TemplatedrivenformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,CustomerComponent]
})
export class AppModule { }
