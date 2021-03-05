import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { FormsModule } from '@angular/forms';
import { ChoiceDirective } from './directives/choiceDirective';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { OrdersModule } from './orders/orders.module';
import { DetailcustomerModule } from './detailcustomer/detailcustomer.module';
import { CustordersComponent } from './orders/custorders.component';

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
    FormsModule,
    OrdersModule,
    DetailcustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent,CustomerComponent]
})
export class AppModule { }
