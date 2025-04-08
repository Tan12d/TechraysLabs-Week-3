// function myFunction(p1, p2) {
//     return p1 * p2;
// }

// let result = myFunction(4, 3);
// document.getElementById("demo").innerHTML = result;


/*
// Local Variables
// Variables declared within a JavaScript function, become LOCAL to the function.
// Local variables can only be accessed from within the function.
*/

let text = "Outside: " + typeof carName;
document.getElementById("demo1").innerHTML = text;

function myFunction() {
  let carName = "Volvo";
  let text = "Inside: " + typeof carName + " " + carName; 
  document.getElementById("demo2").innerHTML = text;
}

myFunction();