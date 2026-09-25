import pandas as pd
import matplotlib.pyplot as plt

# Student dataset
data = {
    "study_hours": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    "attendance": [50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
    "result": [0, 0, 0, 0, 1, 1, 1, 1, 1, 1]
}

students = pd.DataFrame(data)

# Separate Pass and Fail students
passed = students[students["result"] == 1]
failed = students[students["result"] == 0]

# Create scatter plot
plt.scatter(
    failed["study_hours"],
    failed["attendance"],
    label="Fail"
)

plt.scatter(
    passed["study_hours"],
    passed["attendance"],
    label="Pass"
)

# Add title and labels
plt.title("Student Performance")
plt.xlabel("Study Hours")
plt.ylabel("Attendance (%)")
plt.legend()

plt.tight_layout()
plt.savefig("student_performance.png")

plt.show()

print("Chart saved as student_performance.png")