// CLOSURE

/*
function abcd() {
    var name="John";

    function showName() {
        console.log(name);        
    }

    showName();
}

abcd();
*/


/*
function abcd() {
    var name="John";

    function showName() {
        console.log(name);        
    }

    return showName;
}

let fn = abcd();
fn();
*/


/*
function abcd(name) {
    function showName() {
        console.log(name);        
    }

    return showName;
}


let fn1 = abcd("Doe");
fn1();
*/


// -------------------------------------------------------------------


// CURRYING

/*
// simple
function add(a,b,c) {
    return a+b+c;
}

console.log(add(7,8,9));
*/

/*
function add(a) {
    return function (b) {
        return function (c) {
            return a+b+c;
        };
    };
}

console.log(add(2)(4)(8));
*/

/*
function sendAutoEmail(to) {
    return function (subject) {
        return function (body) {
            console.log(`Sending mail to ${to} with subject ${subject} containing body: ${body}`);
        };
    };
}

let step1 = sendAutoEmail("tanmoy@gmail.com");
let step2 = step1("New Order");

step2("Hey! I want to say something...")
*/


// -------------------------------------------------------


// COMPOSITION

/*
// simple   
function add(a,b) {
    return a+b;
}

function multiply(a,b) {
    return a*b;
}

function square(val) {
    return val*val;
}

function composeTwoFunction(fn1, fn2) {
    return function(a,b) {
        return fn2(fn1(a,b));
    };
}

const task = composeTwoFunction(add, square);
console.log(task(2,4));

const task1 = composeTwoFunction(multiply, square);
console.log(task1(2,4));
*/



/*
// modern ES6 format
const c2f = (fn1, fn2) => (a,b) => fn2(fn1(a,b));

const task3 = c2f(multiply, square);
console.log(task3(2,4));
*/


/*
// Infinite functions

function multiply1(args) {
    return args[0] * args[1];
}

function compose(...fns) {
    return function(...values) {
        return fns.reduce((a, b) => b(a), values);
    }
}

const composeAll = (...fns) => (...val) => fns.reduce((a, b) => b(a), val);

const task4 = compose(multiply1, square);
console.log(task4(2, 7));
*/


// ---------------------------------------------------------------------------------


// IIFE - Immediately Invoked Function Expression
/*
(function add(a, b){
    console.log(a+b);  
})(2,4);

(function say() {
    console.log("Hey");   
})();

(() => console.log("Hello"))();

const value = (() => 100)();
console.log(value);
*/


