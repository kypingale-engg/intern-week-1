// TypeScript Generics

// Generic function
function displayValue<T>(value: T): T {
    return value;
}

// Using the function with different types
const numberValue = displayValue<number>(100);
const stringValue = displayValue<string>("Krushnai");
const booleanValue = displayValue<boolean>(true);

console.log("Number:", numberValue);
console.log("String:", stringValue);
console.log("Boolean:", booleanValue);


// Generic array function
function getFirstElement<T>(items: T[]): T {
    if (items.length === 0) {
        throw new Error("Array cannot be empty");
    }

    return items[0]!;
}

const firstNumber = getFirstElement<number>([10, 20, 30]);
const firstName = getFirstElement<string>(["Rahul", "Priya", "Amit"]);

console.log("\nFirst Number:", firstNumber);
console.log("First Name:", firstName);