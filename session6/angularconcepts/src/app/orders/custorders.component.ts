import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-custorders',
  templateUrl: './custorders.component.html',
  styleUrls: ['./custorders.component.css']
})
export class CustordersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() appTitle:any;
  content = "childcontent"
  @Output() sendInfo:EventEmitter = new EventEmitter();
  shareData(){
    this.sendInfo.emit(this.content);
  }
}
// https://rxjs-dev.firebaseapp.com/guide/observable

// Npm install @reactivex/rxjs

// Npm install esm 

// Node -r esm index.js
