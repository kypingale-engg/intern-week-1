// JavaScript Objects, Destructuring, Spread and Rest

const student = {
    name: "Krushnai",
    age: 21,
    course: "Information Technology",
    city: "Amravati"
};

console.log("Student:", student);

// Access object properties
console.log("\nName:", student.name);
console.log("Course:", student.course);

// Object destructuring
const { name, course, city } = student;

console.log("\nDestructured Values:");
console.log("Name:", name);
console.log("Course:", course);
console.log("City:", city);

// Spread operator
const updatedStudent = {
    ...student,
    age: 22
};

console.log("\nUpdated Student:");
console.log(updatedStudent);

// Rest operator
function displayStudent(name, ...skills) {
    console.log("\nStudent Name:", name);
    console.log("Skills:", skills);
}

displayStudent(
    "Krushnai",
    "Java",
    "JavaScript",
    "React",
    "MySQL"
);