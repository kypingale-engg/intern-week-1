// Functions, Scope and Arrow Functions

// Normal function
function add(a, b) {
    return a + b;
}

console.log("Addition:", add(10, 20));

// Function with default parameter
function greet(name = "User") {
    return "Hello, " + name;
}

console.log(greet("Krushnai"));
console.log(greet());

// Block scope using let and const
let age = 21;

if (age >= 18) {
    let message = "Adult";
    console.log("Inside block:", message);
}

// Arrow function
const multiply = (a, b) => {
    return a * b;
};

console.log("Multiplication:", multiply(5, 4));

// Short arrow function
const square = number => number * number;

console.log("Square:", square(6));