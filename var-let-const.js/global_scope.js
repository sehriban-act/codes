"use strict"
var fruit1="fruit1"
// let fruit2="fruit2"
const fruit3="fruit3"
console.log(fruit1);
// console.log(fruit2);
console.log(fruit3);

function globalVariables()
{ if(!fruit3){
    var fruit2="apple"
   return  console.log(fruit2);
 
}
    
    console.log(fruit2);
}
globalVariables()

var a = 10;
{
    var a = -10;
}
let b = a;
{
    let b = -20;
}

console.log(b)