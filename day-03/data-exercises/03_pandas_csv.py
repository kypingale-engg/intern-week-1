import pandas as pd

# Read CSV file
employees = pd.read_csv("../day-02/csv-analysis/employees.csv")

print("Employee Data:")
print(employees)

print("\nFirst 5 Records:")
print(employees.head())

print("\nDataset Information:")
print(employees.info())

print("\nSalary Statistics:")
print(employees["salary"].describe())

print("\nIT Employees:")
print(employees[employees["department"] == "IT"])