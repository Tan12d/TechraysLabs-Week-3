// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// document.getElementById("demo").innerHTML = text.length;


/*
// JavaScript Strings as Objects

// x is a string
let x = "John";

// y is an object
let y = new String("John");

document.getElementById("demo").innerHTML =
typeof x + "<br>" + typeof y;
*/


// --------------------------------------------

/*
let x = new String("John");  // x is an object
let y = new String("John");  // y is an object
document.getElementById("demo").innerHTML = (x==y);
*/

// ----------------------------------------------

/*
let x = new String("John");  // x is an object
let y = new String("John");  // y is an object
document.getElementById("demo").innerHTML = (x===y);
*/

// ----------------------------------------------


// JavaScript String Methods

/*
// charAt(position) same as at(position)
var text = "HELLO WORLD";
document.getElementById("demo").innerHTML = text.charAt(0);
*/

/*
// chatrCodeAt(position)
var text = "HELLO WORLD";
document.getElementById("demo").innerHTML = text.charCodeAt(0);
*/


/*
// slice(start_pos, end_pos)
let text = "Apple, Banana, Kiwi";
let part = text.slice(7,13);
document.getElementById("demo").innerHTML = part; 
*/


/*
// substring(start_pos, end_pos)
let str = "Apple, Banana, Kiwi";
document.getElementById("demo").innerHTML = str.substring(7,13);
*/


/*
//substr(start_pos, length)
let str = "Apple, Banana, Kiwi";
document.getElementById("demo").innerHTML = str.substr(7,6);
*/


/*
//toUpperCase()
let text = "hello";
document.getElementById("demo").innerHTML = text.toUpperCase();
*/


/*
//toLowerCase()
let text = "HELLO";
document.getElementById("demo").innerHTML = text.toLowerCase();
*/


/*
// concat()
let text1 = "Hello";
let text2 = "World!";
let text3 = text1.concat(" ",text2);
document.getElementById("demo").innerHTML = text3;
*/


