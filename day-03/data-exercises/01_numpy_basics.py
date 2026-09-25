import numpy as np

# Create a NumPy array
marks = np.array([75, 82, 68, 90, 85])

print("Marks:", marks)

# Basic calculations
print("Total:", np.sum(marks))
print("Average:", np.mean(marks))
print("Highest:", np.max(marks))
print("Lowest:", np.min(marks))

# Add 5 marks to every student
updated_marks = marks + 5

print("Updated Marks:", updated_marks)