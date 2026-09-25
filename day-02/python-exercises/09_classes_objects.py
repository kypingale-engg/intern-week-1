# Python Classes and Objects

class Employee:

    def __init__(self, name, department, salary):
        self.name = name
        self.department = department
        self.salary = salary

    def display_details(self):
        print("Name:", self.name)
        print("Department:", self.department)
        print("Salary:", self.salary)


# Creating objects

employee1 = Employee("Rahul", "IT", 45000)
employee2 = Employee("Priya", "HR", 50000)

print("Employee 1:")
employee1.display_details()

print("\nEmployee 2:")
employee2.display_details()