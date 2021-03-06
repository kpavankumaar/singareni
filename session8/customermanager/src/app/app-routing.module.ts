import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {path:"customers", loadChildren:() => import("./customers/customers.module").then(m => m.CustomersModule)},
  {path:"orders",loadChildren:() => import("./orders/orders.module").then((m)=> m.OrdersModule)},
  {path:"", pathMatch:"full", redirectTo:"customers" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
