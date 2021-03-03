var string1 = "javascript";
var string2 = "Angular" ;

if(string1){
    console.log(string1);
    console.log(string2);
    
}
function goToMovie(data){
    console.log("book tkts", data);
}
goToMovie("telugu movie");
var person = {
    name: "krishna",
    age:"25"
}
var person1 = {
    name: "Radha",
    age:"25"
}
var arr = [person, person1];

for(var i = 0 ; i < arr.length; i++){
    console.log(arr[i]);
}
for(var item in person){
    console.log(person[item]);
    
}

var num = 10 
var num1 = num ;
num = 20 ;
console.log(num1);


var obj = {
    name : "table",
    make: "wood"
}

var obj1 = obj;
obj1.name = "chair";

console.log(obj.name);

var obj2 = Object.create(obj);
console.log(obj2)
obj2.make = "steel";


// objects , arrays , coercing , numbers, strings, 
// object creation
// call by refernce and call by value  
