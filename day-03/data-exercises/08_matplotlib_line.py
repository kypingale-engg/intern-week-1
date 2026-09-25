import matplotlib.pyplot as plt

# Months and sales data
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
sales = [12000, 15000, 14000, 18000, 21000, 24000]

# Create line chart
plt.plot(months, sales, marker="o")

# Add title and labels
plt.title("Monthly Sales")
plt.xlabel("Month")
plt.ylabel("Sales")

# Display chart
plt.show()