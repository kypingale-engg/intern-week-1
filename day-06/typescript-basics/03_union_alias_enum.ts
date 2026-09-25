// TypeScript Union Types, Type Aliases and Enums

// Union type
let userId: number | string;

userId = 101;
console.log("User ID:", userId);

userId = "USR101";
console.log("User ID:", userId);


// Type alias
type Employee = {
    name: string;
    salary: number;
    department: string;
};

const employee1: Employee = {
    name: "Rahul",
    salary: 45000,
    department: "IT"
};

console.log("\nEmployee:");
console.log(employee1);


// Enum
enum Role {
    INTERN,
    DEVELOPER,
    MANAGER
}

const employeeRole: Role = Role.DEVELOPER;

console.log("\nEmployee Role:");
console.log(employeeRole);
console.log("Developer Role:", Role.DEVELOPER);