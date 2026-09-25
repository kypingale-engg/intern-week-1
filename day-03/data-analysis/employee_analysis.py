import pandas as pd
import matplotlib.pyplot as plt

# Read employee data
employees = pd.read_csv("../day-02/csv-analysis/employees.csv")

print("===== Employee Data Analysis =====")

# Basic information
print("\nTotal Employees:", len(employees))
print("Average Salary:", employees["salary"].mean())
print("Highest Salary:", employees["salary"].max())
print("Lowest Salary:", employees["salary"].min())

# Department-wise analysis
department_stats = employees.groupby("department").agg(
    employee_count=("id", "count"),
    average_salary=("salary", "mean")
)

print("\nDepartment-wise Statistics:")
print(department_stats)

# Highest-paid employee
highest_paid = employees.loc[employees["salary"].idxmax()]

print("\nHighest-Paid Employee:")
print("Name:", highest_paid["name"])
print("Department:", highest_paid["department"])
print("Salary:", highest_paid["salary"])

# Employees earning more than 45000
high_salary = employees[employees["salary"] > 45000]

print("\nEmployees Earning More Than 45000:")
print(high_salary)

# Create department salary chart
department_stats["average_salary"].plot(kind="bar")

plt.title("Average Salary by Department")
plt.xlabel("Department")
plt.ylabel("Average Salary")

plt.tight_layout()
plt.savefig("department_salary.png")

print("\nChart saved as department_salary.png")