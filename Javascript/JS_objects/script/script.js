/*
// method-1

// Create an Object:
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  // Display Data from the Object:
  document.getElementById("demo").innerHTML =
  person.firstName + " is " + person.age + " years old.";
  */


/*

// Method-2
// Create an empty Object
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue"; 

// Display Data from Object
document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";
*/


/*
// Method-3
// Create an Object
const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue"; 

// Diplay Object Content
document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";
*/


// -----------------------------------


// Accessing Object Properties

/*
const person = {
    firstName: "John",
    lastName : "Doe",
    id     :  5566
};


// Method-1
  document.getElementById("demo").innerHTML =
  "The last name is " + person.lastName;

  // Method-2
  document.getElementById("demo").innerHTML =
  "The last name is " + person[lastName];
*/


/*
// -------------------------------------

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  document.getElementById("demo").innerHTML = person.fullName();
*/


// ------------------------------------------

/*
// Objects are Mutable
const person = {
    firstName: "John",
    lastName: "Doe",
    age:50,
    eyeColor: "blue"
  };
  
  // Create a Copy
  const x = person;
  
  // Change Age
  x.age = 10;
  
  document.getElementById("demo").innerHTML =
  person.firstName + " is " + person.age + " years old.";
  */


  // ----------------------------------------------


  /*
  //Adding a new Property

  const person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
  
  person.nationality = "English";
  document.getElementById("demo").innerHTML =
  person.firstname + " is " + person.nationality + ".";
  */

  /*
  // Deleting a Property

  const person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
  
  delete person.age;
  
  document.getElementById("demo").innerHTML =
  person.firstname + " is " + person.age + " years old.";
  */

  // ----------------------------------------------------------------------

/*
  // Nested Objects
  const myObj = {
    name: "John",
    age: 30,
    myCars: {
      car1: "Ford",
      car2: "BMW",
      car3: "Fiat"
    }
  }
  document.getElementById("demo").innerHTML = myObj.myCars.car2;
  */


// ---------------------------------------------------------------


/*
// Adding a Method to an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
  };
  
  // Add a Method
  person.name = function() {
    return this.firstName + " " + this.lastName;
  };
  
  // Display Object Data
  document.getElementById("demo").innerHTML =
  "My father is " + person.name(); 
  */

  // ---------------------------------------------------
  
  /*
  // Display Properties
  const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Build a Text
  let text = "";
  for (let x in person) {
    text += person[x] + " ";
  };
  
  // Display the Text
  document.getElementById("demo").innerHTML = text;
  */


  /*
//   Using Object.values()
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Create an Array
  const myArray = Object.values(person);
  
  // Display the Array
  document.getElementById("demo").innerHTML = myArray;
  */


/*
  // Using Object.entries()
  const fruits = {Bananas:300, Oranges:200, Apples:500}; 

  let text = "";
  for (let [fruit, amount] of Object.entries(fruits)) {
    text += fruit + ": " + amount + "<br>";
  }
  
  document.getElementById("demo").innerHTML = text;
  */



/*
  // Using JSON.stringify()
  const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Display JSON
  document.getElementById("demo").innerHTML = JSON.stringify(person);
  */


  