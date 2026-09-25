from sklearn.neighbors import KNeighborsClassifier

# Training data
# [Hours studied, Attendance percentage]
X = [
    [2, 60],
    [3, 65],
    [4, 70],
    [6, 80],
    [7, 85],
    [8, 90]
]

# Results
# 0 = Fail, 1 = Pass
y = [0, 0, 0, 1, 1, 1]

# Create KNN model
model = KNeighborsClassifier(n_neighbors=3)

# Train the model
model.fit(X, y)

# Predict result for a new student
prediction = model.predict([[5, 75]])

if prediction[0] == 1:
    print("Prediction: Pass")
else:
    print("Prediction: Fail")
    