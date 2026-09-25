# Python Collections
# List, Tuple, Set and Dictionary

# List
employees = ["Rahul", "Priya", "Amit"]
employees.append("Sneha")

print("List:")
print(employees)

# Tuple
departments = ("IT", "HR", "Finance")

print("\nTuple:")
print(departments)

# Set
skills = {"Python", "Java", "Python", "SQL"}

print("\nSet:")
print(skills)

# Dictionary
employee = {
    "name": "Rahul",
    "age": 24,
    "department": "IT",
    "salary": 45000
}

print("\nDictionary:")
print(employee)

print("\nEmployee Name:", employee["name"])
print("Employee Salary:", employee["salary"])