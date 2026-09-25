import pandas as pd

# Create sample data with missing and duplicate values
data = {
    "Name": ["Rahul", "Priya", "Amit", "Neha", "Riya", "Rahul"],
    "Department": ["IT", "HR", "IT", "Finance", "HR", "IT"],
    "Salary": [45000, 55000, None, 60000, 50000, 45000]
}

employees = pd.DataFrame(data)

print("Original Data:")
print(employees)

# Check missing values
print("\nMissing Values:")
print(employees.isnull().sum())

# Fill missing salary with average salary
average_salary = employees["Salary"].mean()
employees["Salary"] = employees["Salary"].fillna(average_salary)

print("\nAfter Filling Missing Salary:")
print(employees)

# Check duplicate records
print("\nDuplicate Records:")
print(employees[employees.duplicated()])

# Remove duplicate records
employees = employees.drop_duplicates()

print("\nAfter Removing Duplicates:")
print(employees)