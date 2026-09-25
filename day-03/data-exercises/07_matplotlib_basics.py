import matplotlib.pyplot as plt

# Employee names and salaries
names = ["Rahul", "Priya", "Amit", "Neha", "Riya"]
salaries = [45000, 55000, 35000, 60000, 50000]

# Create bar chart
plt.bar(names, salaries)

# Add chart title and labels
plt.title("Employee Salaries")
plt.xlabel("Employees")
plt.ylabel("Salary")

# Display the chart
plt.show()