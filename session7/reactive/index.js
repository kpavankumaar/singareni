import { Observable } from "rxjs";

let obs1 = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.error(3);
});


obs1.subscribe( function(val){
    console.log("subscriber 1", val)
}, function(err){
    console.log("subscriber 1", err)
},function(){
    console.log("complete");
}

)
observer = {
    next: (v) => {console.log("subscriber 2",v)},
    error: (err) => {console.log("subscriber 2",err)},
    complete: () => {console.log("complete")}
}
obs1.subscribe(observer);