import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angbasics';
  ngOnChanges(){
    console.log("appcomponent ngOnChanges"); 
  }
  constructor(){
    console.log("appcomponent constructor");
  }
  ngOnInit(): void {
    console.log("appcomponent ngOnInit"); 
  }
  ngDoCheck(){
    console.log("app component ngDocheck"); 
  }
}
