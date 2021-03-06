import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/service/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  userData:any= [];
  prop:any;
  constructor(private service: DataService) { 
    
  }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.service.getCustomers().subscribe((val) =>{
      console.log(val);
      this.userData = val;
      // this.prop = val[0];
    })
  }
  ngDoCheck(){
    console.log(this.userData);
  }

}
