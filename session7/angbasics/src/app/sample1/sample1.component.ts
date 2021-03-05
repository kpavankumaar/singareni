import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.css']
})
export class Sample1Component implements OnInit {
  ngOnChanges(){
    console.log("sample1component ngOnChanges"); 
  }
  constructor(){
    console.log("sample1component constructor");
  }

  ngOnInit(): void {
      console.log("sample1component ngOnInit");
  }
  ngDoCheck(){
    console.log("sample1 component ngDocheck"); 
  }

}
