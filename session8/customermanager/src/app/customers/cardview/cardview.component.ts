import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})
export class CardviewComponent implements OnInit {

  constructor() { }
  @Input() custData:any
  ngOnInit(): void {
    
  }

}
