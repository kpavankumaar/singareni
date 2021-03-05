import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customercardview',
  templateUrl: './customercardview.component.html',
  styleUrls: ['./customercardview.component.css']
})
export class CustomercardviewComponent implements OnInit {
  ngOnChanges(){
    console.log("custeromercardviewcomponent ngOnChanges"); 
  }
  constructor(){
    console.log("custemercardview component constructor");
  }

  ngOnInit(): void {
    console.log("CustomercardviewComponent ngOnInit");
    
  }
  ngDoCheck(){
    console.log("customerscardview ngDocheck"); 
  }
  
}
