import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomercardviewComponent } from './customercardview/customercardview.component';
import { CustomersComponent } from './customers/customers.component';
import { Sample1Component } from './sample1/sample1.component';

const routes:Routes = [
  {
    path:"customers" , 
    component: CustomersComponent,
    children:[
      {path:"sample", component: Sample1Component}
    ]
  },
  {path:"card", component:CustomercardviewComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
