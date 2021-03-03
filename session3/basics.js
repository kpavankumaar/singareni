(function(){
console.log(num); // undefined or 0 
var num = 10 ;
var num1 = num ;
console.log(num1); // 10 
var first = function(){
    console.log(num1)
    var num1 = 20;
    console.log(num1);
}
for(let i = 0; i < 9 ; i++) {
    console.log( "syncronous ", i);
    setTimeout(function(){
        console.log( "asyncronous" , i );
    }, 2000);
}



second();
function second(){
    num1 = 30;
    console.log(num1);
    first();
}
function third(){
    console.log(num1);
    second();    
}

})()