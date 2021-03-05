import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sample1moduleRoutingModule } from './sample1module-routing.module';
import { Sample1componentComponent } from './sample1component.component';
import { Sample12componentComponent } from './sample12component.component';


@NgModule({
  declarations: [Sample1componentComponent, Sample12componentComponent],
  imports: [
    CommonModule,
    Sample1moduleRoutingModule
  ]
})
export class Sample1moduleModule { 
  constructor(){
    console.log("Sample1moduleModule constructor");
  }
}
