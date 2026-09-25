from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# Input data
# [Hours studied, Attendance percentage]
X = [
    [1, 50],
    [2, 55],
    [3, 60],
    [4, 65],
    [5, 70],
    [6, 75],
    [7, 80],
    [8, 85],
    [9, 90],
    [10, 95]
]

# 0 = Fail, 1 = Pass
y = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1]

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42
)

# Create and train model
model = LogisticRegression()
model.fit(X_train, y_train)

# Predict test data
predictions = model.predict(X_test)

print("Actual Results:", y_test)
print("Predicted Results:", predictions)

# Calculate accuracy
accuracy = accuracy_score(y_test, predictions)

print("Accuracy:", accuracy * 100, "%")

# Predict a new student
new_student = model.predict([[6, 75]])

if new_student[0] == 1:
    print("New Student Prediction: Pass")
else:
    print("New Student Prediction: Fail")