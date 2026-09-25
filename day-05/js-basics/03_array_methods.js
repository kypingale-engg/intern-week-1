// JavaScript Array Methods

const numbers = [10, 20, 30, 40, 50];

console.log("Original Array:", numbers);

// map() - creates a new array by changing every element
const doubled = numbers.map(number => number * 2);

console.log("\nDoubled:", doubled);

// filter() - creates a new array with selected elements
const greaterThan25 = numbers.filter(number => number > 25);

console.log("Numbers greater than 25:", greaterThan25);

// reduce() - combines all elements into one value
const total = numbers.reduce((sum, number) => sum + number, 0);

console.log("Total:", total);

// Practical example
const employees = [
    { name: "Rahul", salary: 45000 },
    { name: "Priya", salary: 55000 },
    { name: "Amit", salary: 35000 },
    { name: "Neha", salary: 60000 }
];

// Get employee names
const employeeNames = employees.map(employee => employee.name);

console.log("\nEmployee Names:", employeeNames);

// Get employees with salary above 50000
const highSalaryEmployees = employees.filter(
    employee => employee.salary > 50000
);

console.log("High Salary Employees:", highSalaryEmployees);

// Calculate total salary
const totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);

console.log("Total Salary:", totalSalary);