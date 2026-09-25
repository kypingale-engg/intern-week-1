import pandas as pd
import matplotlib.pyplot as plt

# Read employee data
employees = pd.read_csv("../day-02/csv-analysis/employees.csv")

# Calculate average salary by department
department_salary = employees.groupby("department")["salary"].mean()

print("Department-wise Average Salary:")
print(department_salary)

# Create bar chart
department_salary.plot(kind="bar")

plt.title("Average Salary by Department")
plt.xlabel("Department")
plt.ylabel("Average Salary")

plt.tight_layout()
plt.show()