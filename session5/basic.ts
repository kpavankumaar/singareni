import { Student } from "./typescript/index";
let studentDetails = new Student();
// generics 
function sum<T>( a:T):T {
    return a ;
}
sum(10)
sum("ravi");