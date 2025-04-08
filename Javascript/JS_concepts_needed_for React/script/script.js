// function DoSomething() {}

/*
// Arrow Function
const DoSomething = () => {

}
*/

/*
<button
    onClick={() => {
        console.log("hello world");
    }}>
</button>
*/



/*
// Ternary operator
let age=10;
let name = age===10 && "Pedro";

let person = age >=18 ? "Adult" : "Child";

console.log(person);


const Component = () => {
    return (
        age>=18 ? <div>Child</div> : <div>Adult</div>
    )
}
*/


/*
// Destructuring 
const person = {
    name: 'John',
    age: 24,
    salary: 2000000
};

const { name, age, salary } = person;

console.log(name);
console.log(age);
console.log(salary);
*/


/*
//Spread Operator
const person = {
    name: 'John',
    age: 24,
    salary: 2000000
};

const person2 = {...person, name: "Wick"};

console.log("person ", person)
console.log("person2 ", person2);


const arr = ["USA", "India", "England"];
const arr2 = [...arr, "Australia"];

console.log(arr);
console.log(arr2);
*/


/*
let names = ["John", "Louis", "Amy"];

// map()
names.map((name) => {
    console.log(name, name.length);    
})

// filter()
var name_1 = names.filter((name) => {
    return name.startsWith("J");
})

console.log(name_1);
*/