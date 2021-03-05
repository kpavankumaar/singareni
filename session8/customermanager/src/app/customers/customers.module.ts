import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CardviewComponent } from './cardview/cardview.component';
import { GridviewComponent } from './gridview/gridview.component';
import { CustomersComponent } from './customers.component';


@NgModule({
  declarations: [CardviewComponent, GridviewComponent, CustomersComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
