import pandas as pd

# Read employee data
employees = pd.read_csv("../day-02/csv-analysis/employees.csv")

# Employees with salary greater than 45000
print("Employees with Salary > 45000:")
print(employees[employees["salary"] > 45000])

# Employees from HR department
print("\nHR Employees:")
print(employees[employees["department"] == "HR"])

# Sort employees by salary in descending order
print("\nEmployees Sorted by Salary (Highest to Lowest):")
print(employees.sort_values("salary", ascending=False))

# Top 3 highest-paid employees
print("\nTop 3 Highest-Paid Employees:")
print(employees.sort_values("salary", ascending=False).head(3))