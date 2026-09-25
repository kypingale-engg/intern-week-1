import pandas as pd

# Create employee data
data = {
    "Name": ["Rahul", "Priya", "Amit", "Neha", "Riya"],
    "Department": ["IT", "HR", "IT", "Finance", "HR"],
    "Salary": [45000, 55000, 35000, 60000, 50000]
}

# Create a DataFrame
employees = pd.DataFrame(data)

print("Employee Data:")
print(employees)

print("\nTotal Employees:")
print(len(employees))

print("\nAverage Salary:")
print(employees["Salary"].mean())

print("\nHighest Salary:")
print(employees["Salary"].max())

print("\nLowest Salary:")
print(employees["Salary"].min())

print("\nIT Employees:")
print(employees[employees["Department"] == "IT"])