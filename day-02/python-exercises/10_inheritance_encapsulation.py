# Python Inheritance and Encapsulation


# Parent class
class Employee:

    def __init__(self, name, salary):
        self.name = name
        self.__salary = salary

    def display_salary(self):
        print("Salary:", self.__salary)


# Child class
class Manager(Employee):

    def __init__(self, name, salary, department):
        super().__init__(name, salary)
        self.department = department

    def display_details(self):
        print("Name:", self.name)
        print("Department:", self.department)
        self.display_salary()


# Creating object
manager = Manager("Rahul", 70000, "IT")

manager.display_details()