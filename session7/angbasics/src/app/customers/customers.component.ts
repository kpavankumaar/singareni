import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  ngOnChanges(){
    console.log("customerscomponent ngOnChanges"); 
  }
  constructor(){
    console.log("customerscomponent constructor");
  }
  ngOnInit(): void {
    console.log("CustomersComponent ngOnInit");
    
  }
  title = "data";
  ngDoCheck(){
    console.log("customers ngDocheck"); 
  }
  ngOnDestroy(){
    console.log("customers ngOnDestroy"); 
  }
}
