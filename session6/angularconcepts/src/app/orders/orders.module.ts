import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { CustordersComponent } from './custorders.component';
import { DetailcustomerModule } from '../detailcustomer/detailcustomer.module';


@NgModule({
  declarations: [CustordersComponent],
  exports:[CustordersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    DetailcustomerModule
  ]
})
export class OrdersModule { }
