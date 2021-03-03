function printName(name){
     return function (age){
        console.log(name +" age is " + age );
     }

}

printName("krishna")(20);