import pandas as pd

# Read employee data
employees = pd.read_csv("../day-02/csv-analysis/employees.csv")

# Department-wise employee count
print("Department-wise Employee Count:")
print(employees.groupby("department")["id"].count())

# Department-wise average salary
print("\nDepartment-wise Average Salary:")
print(employees.groupby("department")["salary"].mean())

# Department-wise maximum salary
print("\nDepartment-wise Maximum Salary:")
print(employees.groupby("department")["salary"].max())