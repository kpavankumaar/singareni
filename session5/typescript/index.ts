console.log("check");
let name1 = "ravi";
name1 = "srk";
const num = 10 ;
num = 20;
const obj = {
    name: "ravi"
}
obj.name = "srk";
// obj = {}

let obj1  = obj 
obj1 = {
    name :"rajesh"
}
// arrow function 
let calc = a  =>  a * a


let names:string[];
names = ["krishna", "radha"];
let movies: Array<string>
interface Value{
    (a:number, b:number): number
}

function add (num1, num2){
     return num1 * num2;
}

let sum:Value = add;
sum(10, 20)

// obj 
interface Iobj {
    name: string;
    age?: number;
    [index:string]:any
}
let obj2:Iobj = {
    name: "ravi",
    age: 20
} 
obj2.eduction = ""
let obj3:Iobj = {
    name:"srk"
}

interface Details {
    name: string
}

interface Location {
    maps: string;
}

class Person implements Details,Location {
    name;
    private age;
    protected gender;
    constructor(theName){
        this.name = theName;
    }

}
class Employee extends Person{
    education: string;

    constructor(name){
        super(name)
    }
    info(){
        this.name;
        this.age
        this.gender;
    }

}
export class Student extends Employee{
    name
}

let obj4 = new Person("krishna")
console.log(obj4.name);

let obj5 = new Employee("balaram");
