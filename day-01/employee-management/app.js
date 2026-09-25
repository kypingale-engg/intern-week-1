const readline = require("readline");

const employees = [
  {
    id: 1,
    name: "Rahul",
    age: 24,
    department: "IT",
    salary: 45000
  },
  {
    id: 2,
    name: "Priya",
    age: 26,
    department: "HR",
    salary: 40000
  },
  {
    id: 3,
    name: "Amit",
    age: 25,
    department: "IT",
    salary: 55000
  }
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// List Employees
function listEmployees() {
  console.log("\n--- Employee List ---");

  if (employees.length === 0) {
    console.log("No employees found.");
    return;
  }

  employees.forEach((employee) => {
    console.log(
      `ID: ${employee.id} | Name: ${employee.name} | Age: ${employee.age} | Department: ${employee.department} | Salary: ₹${employee.salary}`
    );
  });
}

// Add Employee
function addEmployee() {
  rl.question("Enter employee name: ", (name) => {
    if (name.trim() === "") {
      console.log("\nName cannot be empty.");
      showMenu();
      return;
    }

    rl.question("Enter age: ", (age) => {
      const employeeAge = Number(age);

      if (!Number.isInteger(employeeAge) || employeeAge <= 0) {
        console.log("\nPlease enter a valid age.");
        showMenu();
        return;
      }

      rl.question("Enter department: ", (department) => {
        if (department.trim() === "") {
          console.log("\nDepartment cannot be empty.");
          showMenu();
          return;
        }

        rl.question("Enter salary: ", (salary) => {
          const employeeSalary = Number(salary);

          if (isNaN(employeeSalary) || employeeSalary <= 0) {
            console.log("\nPlease enter a valid salary.");
            showMenu();
            return;
          }

          const newId =
            employees.length === 0
              ? 1
              : Math.max(...employees.map((employee) => employee.id)) + 1;

          const newEmployee = {
            id: newId,
            name: name.trim(),
            age: employeeAge,
            department: department.trim(),
            salary: employeeSalary
          };

          employees.push(newEmployee);

          console.log("\nEmployee added successfully!");
          showMenu();
        });
      });
    });
  });
}

// Search Employee
function searchEmployee() {
  rl.question("Enter employee name to search: ", (name) => {

    if (name.trim() === "") {
      console.log("\nName cannot be empty.");
      showMenu();
      return;
    }

    const employee = employees.find(
      (employee) =>
        employee.name.toLowerCase() === name.trim().toLowerCase()
    );

    if (employee) {
      console.log("\nEmployee Found:");
      console.log(`ID: ${employee.id}`);
      console.log(`Name: ${employee.name}`);
      console.log(`Age: ${employee.age}`);
      console.log(`Department: ${employee.department}`);
      console.log(`Salary: ₹${employee.salary}`);
    } else {
      console.log("\nEmployee not found.");
    }

    showMenu();
  });
}

// Update Employee
function updateEmployee() {
  rl.question("Enter employee ID to update: ", (id) => {

    const employeeId = Number(id);

    if (!Number.isInteger(employeeId) || employeeId <= 0) {
      console.log("\nPlease enter a valid employee ID.");
      showMenu();
      return;
    }

    const employee = employees.find(
      (employee) => employee.id === employeeId
    );

    if (!employee) {
      console.log("\nEmployee not found.");
      showMenu();
      return;
    }

    rl.question("Enter new name: ", (name) => {
      if (name.trim() === "") {
        console.log("\nName cannot be empty.");
        showMenu();
        return;
      }

      rl.question("Enter new age: ", (age) => {
        const employeeAge = Number(age);

        if (!Number.isInteger(employeeAge) || employeeAge <= 0) {
          console.log("\nPlease enter a valid age.");
          showMenu();
          return;
        }

        rl.question("Enter new department: ", (department) => {
          if (department.trim() === "") {
            console.log("\nDepartment cannot be empty.");
            showMenu();
            return;
          }

          rl.question("Enter new salary: ", (salary) => {
            const employeeSalary = Number(salary);

            if (isNaN(employeeSalary) || employeeSalary <= 0) {
              console.log("\nPlease enter a valid salary.");
              showMenu();
              return;
            }

            employee.name = name.trim();
            employee.age = employeeAge;
            employee.department = department.trim();
            employee.salary = employeeSalary;

            console.log("\nEmployee updated successfully!");
            showMenu();
          });
        });
      });
    });
  });
}

// Delete Employee
function deleteEmployee() {
  rl.question("Enter employee ID to delete: ", (id) => {

    const employeeId = Number(id);

    if (!Number.isInteger(employeeId) || employeeId <= 0) {
      console.log("\nPlease enter a valid employee ID.");
      showMenu();
      return;
    }

    const index = employees.findIndex(
      (employee) => employee.id === employeeId
    );

    if (index === -1) {
      console.log("\nEmployee not found.");
    } else {
      employees.splice(index, 1);
      console.log("\nEmployee deleted successfully!");
    }

    showMenu();
  });
}

// Highest Salary
function highestSalary() {
  if (employees.length === 0) {
    console.log("\nNo employees found.");
    showMenu();
    return;
  }

  let highest = employees[0];

  for (let i = 1; i < employees.length; i++) {
    if (employees[i].salary > highest.salary) {
      highest = employees[i];
    }
  }

  console.log("\n--- Highest Salary Employee ---");
  console.log(`ID: ${highest.id}`);
  console.log(`Name: ${highest.name}`);
  console.log(`Department: ${highest.department}`);
  console.log(`Salary: ₹${highest.salary}`);

  showMenu();
}

// Average Salary
function averageSalary() {
  if (employees.length === 0) {
    console.log("\nNo employees found.");
    showMenu();
    return;
  }

  let totalSalary = 0;

  for (let i = 0; i < employees.length; i++) {
    totalSalary += employees[i].salary;
  }

  const average = totalSalary / employees.length;

  console.log("\n--- Average Salary ---");
  console.log(`Average Salary: ₹${average.toFixed(2)}`);

  showMenu();
}

// Department Filter
function departmentFilter() {
  rl.question("Enter department to filter: ", (department) => {

    if (department.trim() === "") {
      console.log("\nDepartment cannot be empty.");
      showMenu();
      return;
    }

    const filteredEmployees = employees.filter(
      (employee) =>
        employee.department.toLowerCase() === department.trim().toLowerCase()
    );

    if (filteredEmployees.length === 0) {
      console.log("\nNo employees found in this department.");
    } else {
      console.log(
        `\n--- Employees in ${department.trim().toUpperCase()} Department ---`
      );

      filteredEmployees.forEach((employee) => {
        console.log(
          `ID: ${employee.id} | Name: ${employee.name} | Age: ${employee.age} | Salary: ₹${employee.salary}`
        );
      });
    }

    showMenu();
  });
}

// Menu
function showMenu() {
  console.log("\n==============================");
  console.log("   EMPLOYEE MANAGEMENT SYSTEM");
  console.log("==============================");

  console.log("1. Add Employee");
  console.log("2. Update Employee");
  console.log("3. Delete Employee");
  console.log("4. Search Employee");
  console.log("5. List Employees");
  console.log("6. Highest Salary");
  console.log("7. Average Salary");
  console.log("8. Department Filter");
  console.log("9. Exit");

  rl.question("\nEnter your choice: ", (choice) => {

    switch (choice) {
      case "1":
        addEmployee();
        break;

      case "2":
        updateEmployee();
        break;

      case "3":
        deleteEmployee();
        break;

      case "4":
        searchEmployee();
        break;

      case "5":
        listEmployees();
        showMenu();
        break;

      case "6":
        highestSalary();
        break;

      case "7":
        averageSalary();
        break;

      case "8":
        departmentFilter();
        break;

      case "9":
        console.log("\nThank you for using Employee Management System!");
        rl.close();
        break;

      default:
        console.log("\nInvalid choice. Please enter a number from 1 to 9.");
        showMenu();
    }
  });
}

showMenu();