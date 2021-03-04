import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector:'[choice]'
})
export class ChoiceDirective{
    
    constructor( public data:ElementRef){
        console.log(this.data);
        this.data.nativeElement.style.backgroundColor = "lightgrey";
    }

}
