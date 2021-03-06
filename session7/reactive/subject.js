import { Subject, BehaviorSubject, ReplaySubject } from "rxjs"
// example1
// let s1 = new Subject();
// let observer = {
//     next: (v) => {console.log(v)}
// }
// let sub1 = s1.subscribe((v) => {
//     console.log("subscriber1",v);
// });

// s1.next(1);
// s1.next(2);

// s1.subscribe((v) => {
//     console.log("subscriber2", v);
// });

// s1.next(3);
// sub1.unsubscribe();
// s1.next(4);

// example 2 
let behaviourobs1 = new BehaviorSubject(0);
let bsub1 = behaviourobs1.subscribe((v) =>{
    console.log("subscriber1 ", v);
})

behaviourobs1.next(1);
behaviourobs1.next(2);

let bsub2 = behaviourobs1.subscribe((v) =>{
    console.log("subscriber2 ", v);
})

behaviourobs1.next(3);
behaviourobs1.next(4);

