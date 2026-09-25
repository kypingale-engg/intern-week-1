// TypeScript Functions, Interfaces and Optional Properties

function add(a: number, b: number): number {
    return a + b;
}

function greet(name: string): string {
    return "Hello, " + name;
}

console.log("Addition:", add(10, 20));
console.log(greet("Krushnai"));

// Interface
interface Student {
    name: string;
    age: number;
    course: string;
    city?: string;
}

// Object using the interface
const student1: Student = {
    name: "Krushnai",
    age: 21,
    course: "Information Technology"
};

const student2: Student = {
    name: "Priya",
    age: 21,
    course: "Computer Engineering",
    city: "Amravati"
};

console.log("\nStudent 1:");
console.log(student1);

console.log("\nStudent 2:");
console.log(student2);