// JavaScript Variables

// let x;
// x = 6;
// document.getElementById("demo").innerHTML = x;


// JavaScript Operators

// document.getElementById("demo").innerHTML = (5 + 6) * 10;


// JavaScript Expressions

// document.getElementById("demo").innerHTML = 5 * 10;


// JavaScript Keywords

// let x, y;
// x = 5 + 6;
// y = x * 10;
// document.getElementById("demo").innerHTML = y;


// JavaScript is Case Sensitive

// let lastname, lastName;
// lastName = "Doe";
// lastname = "Peterson";
// document.getElementById("demo").innerHTML = lastName;


// Single Line Comments

/*
    This is a 
    Multiline Coment
*/


// var

// var x = 5;
// var y = 6;
// var z = x + y;
// document.write(z);



//-----------------------------------------

//Operators


// The Assignment Operator

// let x = x + 5




// JS Datatypes

// Value = undefined

// let carName;


// Re-Declaring JavaScript Variables

// var carName = "Volvo";
// document.write(carName);
// var carName;
// document.write(carName);


/*
    error

    let carName = "Volvo";
    document.write(carName);
    let carName;
    document.write(carName);
*/


// JavaScript Dollar Sign $

// let $ = "Hello World";
// document.write($);


//JavaScript Underscore (_)

// let _x = 2;
// let _100 = 5;
// document.getElementById("demo").innerHTML = _x + _100;


// --------------------------------------------

// Block Scope - let, const

// {
//     let x = 2;
// }
// x can NOT be used here


// Global Scope - var

// {
//     var x = 2;
// }
  // x CAN be used here


// --------------------------------------------------


// Cannot be Redeclared

// With let you can not do this:
// let x = "John Doe";
// let x = 0;

// With var you can do this:
// var x = "John Doe";
// var x = 0;


// ---------------------------------------------------


// Redeclaring a variable inside a block will also redeclare the variable outside the block:
/*
var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2
*/

// Redeclaring a variable inside a block will not redeclare the variable outside the block:
/*
let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10
*/


// --------------------------------------------


// Variable - const


// Cannot be Reassigned
/*
    error
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
*/


// Must be Assigned

// Correct
// const PI = 3.14159265359;
// Incorrect
// const PI;
// PI = 3.14159265359;


// ----------------------------------------------------


// Constant Arrays
// You can change the elements of a constant array:
// Create an Array:
/*
const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
cars[0] = "Toyota";

// Add an element:
cars.push("Audi");

// Display the Array:
document.getElementById("demo").innerHTML = cars; 
*/


/*
But you can NOT reassign the array:
const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR
*/


/*
Constant Objects
You can change the properties of a constant object:
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
*/

/*
But you can NOT reassign the object:

Example
const car = {type:"Fiat", model:"500", color:"white"};
*/


/*
Block Scope

The x declared in the block, in this example, is not the same as the x declared outside the block:

const x = 10;
// Here x is 10

{
const x = 2;
// Here x is 2
}
*/


/*
Redeclaring an existing var or let variable to const, in the same scope, is not allowed:

var x = 2;     // Allowed
const x = 2;   // Not allowed

{
let x = 2;     // Allowed
const x = 2;   // Not allowed
}

{
const x = 2;   // Allowed
const x = 2;   // Not allowed
}
*/


/*
// Using a const variable before it is declared will result in a ReferenceError:

alert (carName);
const carName = "Volvo";
*/


