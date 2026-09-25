# Employee Management System

import json

DATA_FILE = "employees.json"


def load_employees():
    try:
        with open(DATA_FILE, "r") as file:
            return json.load(file)

    except (FileNotFoundError, json.JSONDecodeError):
        return []


def save_employees(employees):
    with open(DATA_FILE, "w") as file:
        json.dump(employees, file, indent=4)


def display_employees(employees):
    if not employees:
        print("\nNo employees found.")
        return

    print("\nEmployee List:")

    for employee in employees:
        print(
            employee["id"],
            "-",
            employee["name"],
            "-",
            employee["department"],
            "-",
            employee["salary"]
        )


def add_employee(employees):
    print("\n===== Add Employee =====")

    employee_id = input("Enter employee ID: ")

    # Check duplicate ID
    for employee in employees:
        if employee["id"] == employee_id:
            print("Employee ID already exists.")
            return

    name = input("Enter employee name: ")
    department = input("Enter department: ")

    try:
        salary = float(input("Enter salary: "))
    except ValueError:
        print("Invalid salary. Please enter a number.")
        return

    employee = {
        "id": employee_id,
        "name": name,
        "department": department,
        "salary": salary
    }

    employees.append(employee)
    save_employees(employees)

    print("Employee added successfully.")


def update_employee(employees):
    print("\n===== Update Employee =====")

    employee_id = input("Enter employee ID to update: ")

    for employee in employees:
        if employee["id"] == employee_id:

            employee["name"] = input("Enter new name: ")
            employee["department"] = input("Enter new department: ")

            try:
                employee["salary"] = float(input("Enter new salary: "))
            except ValueError:
                print("Invalid salary. Update cancelled.")
                return

            save_employees(employees)

            print("Employee updated successfully.")
            return

    print("Employee not found.")


def delete_employee(employees):
    print("\n===== Delete Employee =====")

    employee_id = input("Enter employee ID to delete: ")

    for employee in employees:
        if employee["id"] == employee_id:
            employees.remove(employee)
            save_employees(employees)

            print("Employee deleted successfully.")
            return

    print("Employee not found.")


def search_employee(employees):
    print("\n===== Search Employee =====")

    search_value = input("Enter employee ID or name: ").lower()

    found = False

    for employee in employees:
        if (
            search_value in employee["id"].lower()
            or search_value in employee["name"].lower()
        ):
            print(
                employee["id"],
                "-",
                employee["name"],
                "-",
                employee["department"],
                "-",
                employee["salary"]
            )

            found = True

    if not found:
        print("Employee not found.")


def filter_employees(employees):
    print("\n===== Filter Employees =====")
    print("1. Filter by Department")
    print("2. Filter by Minimum Salary")

    choice = input("Enter your choice: ")

    if choice == "1":
        department = input("Enter department: ").lower()

        found = False

        for employee in employees:
            if employee["department"].lower() == department:
                print(
                    employee["id"],
                    "-",
                    employee["name"],
                    "-",
                    employee["department"],
                    "-",
                    employee["salary"]
                )
                found = True

        if not found:
            print("No employees found in this department.")

    elif choice == "2":
        try:
            minimum_salary = float(input("Enter minimum salary: "))
        except ValueError:
            print("Invalid salary.")
            return

        found = False

        for employee in employees:
            if employee["salary"] >= minimum_salary:
                print(
                    employee["id"],
                    "-",
                    employee["name"],
                    "-",
                    employee["department"],
                    "-",
                    employee["salary"]
                )
                found = True

        if not found:
            print("No employees found above this salary.")

    else:
        print("Invalid choice.")


def sort_employees(employees):
    print("\n===== Sort Employees =====")
    print("1. Salary - Low to High")
    print("2. Salary - High to Low")
    print("3. Name - A to Z")

    choice = input("Enter your choice: ")

    if choice == "1":
        sorted_employees = sorted(
            employees,
            key=lambda employee: employee["salary"]
        )

    elif choice == "2":
        sorted_employees = sorted(
            employees,
            key=lambda employee: employee["salary"],
            reverse=True
        )

    elif choice == "3":
        sorted_employees = sorted(
            employees,
            key=lambda employee: employee["name"].lower()
        )

    else:
        print("Invalid choice.")
        return

    display_employees(sorted_employees)


def show_statistics(employees):
    print("\n===== Employee Statistics =====")

    if not employees:
        print("No employees found.")
        return

    salaries = []

    for employee in employees:
        salaries.append(employee["salary"])

    total_employees = len(employees)
    average_salary = sum(salaries) / total_employees
    minimum_salary = min(salaries)
    maximum_salary = max(salaries)

    print("Total Employees:", total_employees)
    print("Average Salary:", average_salary)
    print("Minimum Salary:", minimum_salary)
    print("Maximum Salary:", maximum_salary)


def main():
    employees = load_employees()

    while True:
        print("\n===== Employee Management System =====")
        print("1. Add Employee")
        print("2. Display Employees")
        print("3. Update Employee")
        print("4. Delete Employee")
        print("5. Search Employee")
        print("6. Filter Employees")
        print("7. Sort Employees")
        print("8. Statistics")
        print("9. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            add_employee(employees)

        elif choice == "2":
            display_employees(employees)

        elif choice == "3":
            update_employee(employees)

        elif choice == "4":
            delete_employee(employees)

        elif choice == "5":
            search_employee(employees)

        elif choice == "6":
            filter_employees(employees)

        elif choice == "7":
            sort_employees(employees)

        elif choice == "8":
            show_statistics(employees)

        elif choice == "9":
            print("Thank you!")
            break

        else:
            print("Invalid choice.")


if __name__ == "__main__":
    main()