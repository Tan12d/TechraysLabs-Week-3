// A synchronous function in JavaScript executes sequentially, meaning each operation completes before the next one begins.

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// ---------------------------------
 
// Asynchronous functions in JavaScript allow for non-blocking execution, enabling other code to run while waiting for long-running tasks to complete.
// The async keyword is used to define an asynchronous function, and the await keyword is used within it to pause execution until a Promise resolves. When an async function is called, it returns a Promise, which will either resolve with the function's return value or reject with an error. 

/*
// ways to write async function:

// Sending request
1. setTimeout
2. setInterval
3. Promises
4. fetch
5. axios
6. XMLHttpRequest

// After the request
1. then catch
2. callbacks
3. async await
*/

/*
console.log("hey");
setTimeout(function() {
    console.log("hey2");
}, 2000);
console.log("hey3");
*/

/*
console.log("hey");
console.log("hey2");
setTimeout(function() {
    console.log("hey3");
}, 0);
console.log("hey4");
*/



// Promise
/*
var ans = new Promise((res, rej) => {
    if(true) {
        return res();
    }

    else {
        return rej();
    }
})

ans
.then(function() {
    console.log("Got resolved");
})
.catch(function() {
    console.log("Got rejected");
})
*/

/*
var ans = new Promise((res, rej) => {
    var n = Math.floor(Math.random()*10);

    if(n<5) {
        return res();
    }

    else {
        return rej();
    }
});

ans
.then(function() {
    console.log("below");
})
.catch(function() {
    console.log("above");    
})
*/

/*
// Tasks:
1. Come to home
2. Open the gate and close it
3. Cook food and eat it


var ans = new Promise(function (res, rej) {
    return res("Come to home");
})

var t2 = ans.then(function (data) {
    console.log(data);
    return new Promise(function (res, rej) {
        return res("Open the gate and close it");
    })
})

var t3 = t2.then(function(data) {
    console.log(data);
    return new Promise((res, rej) => {
        return res("Cook food and eat it");
    })
})

t3.then(function (data) {
    console.log(data);    
})
*/


// -----------------------------------------------------------

/*
// using then()
function abcd() {
    fetch(`https://randomuser.me/api/`)
    .then(function(raw) {
        return raw.json();
    })
    .then(function(data) {
        console.log(data);        
    }) 
}

abcd();
*/ 

// without using then()
async function abcd() {
    let raw = await fetch(`https://randomuser.me/api/`)
        
    let ans = await raw.json();

    console.log(ans);    
}

abcd();