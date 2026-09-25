import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# Student dataset
data = {
    "study_hours": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    "attendance": [50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
    "result": [0, 0, 0, 0, 1, 1, 1, 1, 1, 1]
}

students = pd.DataFrame(data)

print("===== Student Performance Prediction =====")

print("\nStudent Data:")
print(students)

# Features
X = students[["study_hours", "attendance"]]

# Target
y = students["result"]

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.3,
    random_state=42
)

# Create and train model
model = LogisticRegression()
model.fit(X_train, y_train)

# Predict test data
predictions = model.predict(X_test)

# Calculate accuracy
accuracy = accuracy_score(y_test, predictions)

print("\nActual Results:")
print(y_test.values)

print("\nPredicted Results:")
print(predictions)

print("\nModel Accuracy:")
print(accuracy * 100, "%")

# Predict a new student
new_student = pd.DataFrame({
    "study_hours": [6],
    "attendance": [75]
})

new_prediction = model.predict(new_student)

print("\nNew Student:")
print("Study Hours:", new_student["study_hours"].iloc[0])
print("Attendance:", new_student["attendance"].iloc[0])

if new_prediction[0] == 1:
    print("Prediction: Pass")
else:
    print("Prediction: Fail")