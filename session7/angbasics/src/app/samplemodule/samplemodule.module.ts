import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplemoduleRoutingModule } from './samplemodule-routing.module';
import { SampleComponent } from './sample.component';


@NgModule({
  declarations: [SampleComponent],
  imports: [
    CommonModule,
    SamplemoduleRoutingModule
  ]
})
export class SamplemoduleModule { 
  constructor(){
    console.log("SamplemoduleModule constructor");
  }
}
