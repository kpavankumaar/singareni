import { Observable } from "rxjs";
let i = 0 ;
let z = 2;
let obs1 = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    // observer.error(3);
    // observer.complete()
    setInterval(function(){
        observer.next(i++)
        observer.next(z++)
    }, 1000)
});

// subscriber1 
obs1.subscribe( function(val){
    console.log("subscriber 1", val)
}, function(err){
    console.log("subscriber 1", err)
},function(){
    console.log("complete");
}

)
let observer = {
    next: (v) => {console.log("subscriber 2",v)},
    error: (err) => {console.log("subscriber 2",err)},
    complete: () => {console.log("complete")}
}
obs1.subscribe(observer); // subscriber2