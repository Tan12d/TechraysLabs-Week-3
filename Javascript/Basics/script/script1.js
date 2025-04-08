// ------------------------------------------------------------------------ ADVANCED JS ----------------------------------------------------------------------------------------


// var vs let

// var a = 12;

// let b=1;

// -----------------------------------

// Execution context -  whenever we call a function, an imaginary container gets created known as "Execution Context" and in that only function runs
// It contains 3 parts:
// 1) variables
// 2) functions inside that parent function
// 3) lexical environment of that function (what it can access and what it can't)

// function abcd() {
//     var a = 12;
//     function def() {
//         var b = 12; / / abcd() can't use variable 'b'
//     }
// }

// ----------------------------------------


// how to copy reference values

// var a = [1,2,3,4,5];
// var b = [...a];

// console.log("a = ", a);
// console.log("b = ", b);

// b.pop();

// console.log("a = ", a);
// console.log("b = ", b);

// var obj = {name: "harsh"};
// var copyObj = {...obj};

// --------------------------------------------

// Truthy & Falsy

// Falsy = 0, undefined, null, NaN, document.all, "" (empty string)

// if(document.all) 
// {
//     console.log("0");
    
// }

// else {
//     console.log("hello");
// }

//--------------------------------------------------------------------


// Advanced Loops

// foreach loop - only in Array

// var a = [1,2,3,4,5,6,7,8,9];

// a.forEach(function (val) {
//     console.log(val+2);    
// })


// forin loop - in object 

// var obj = {
//     name: "Krishna",
//     age: 24,
//     city: "Dwarka"
// }

// for(var key in obj) {
//     console.log(key, " ", obj[key]);    
// }
 

// do...while

// var a=0;

// do {
//     console.log(a);
//     a++;
// } while(a<10);


// ------------------------------------------------------------------


// Callback functions

// setTimeout(function() {
//     console.log("after 2 second");
// }, 2000);

// -------------------------------------------------------


// First class Functions

// Functions can be used as a value

// function abcd(a) {           //Normal Function
//     console.log("hey");    
// }

// abcd(12);


// function abcd(a) {
//     a();
// }

// abcd(function() {
//     console.log("hey");    
// })

// ------------------------------------------------------------


// How arrays are made behind the scene

// var arr = [1,2,3,4];

// arr = {   // behind the scene it's just an object
//     0: 1,
//     1: 2,
//     2: 3,
//     3: 4
// }

// arr[-1] = 2;

// to check which one is Array and which one is Object 
// Array.isArray([]) // var x = [1,2,3,4]; Array.isArray(arr);

// Array.isArray({}) // var y = { a: 1, b: 2}; Array.isArray(y); 

// -----------------------------------------------------------------


// How to delete an object prop

// var a = {
//     name: "harsh",
//     age: 24
// }

// delete a.age