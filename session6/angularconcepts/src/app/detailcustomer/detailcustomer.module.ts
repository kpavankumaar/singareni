import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailcustomerRoutingModule } from './detailcustomer-routing.module';
import { CustdetailComponent } from './custdetail/custdetail.component';


@NgModule({
  declarations: [CustdetailComponent],
  exports:[CustdetailComponent],
  imports: [
    CommonModule,
    DetailcustomerRoutingModule
  ]
})
export class DetailcustomerModule { }
