import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sample1Component } from '../sample1/sample1.component';

const routes: Routes = [
  {path:"", component:Sample1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sample1moduleRoutingModule { }
