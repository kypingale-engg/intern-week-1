from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score

# Student data
X = [
    [2, 60],
    [3, 65],
    [4, 70],
    [6, 80],
    [7, 85],
    [8, 90],
    [2, 55],
    [5, 75],
    [6, 78],
    [8, 88]
]

# 0 = Fail, 1 = Pass
y = [0, 0, 0, 1, 1, 1, 0, 1, 1, 1]

# Split data into training and testing data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42
)

# Create and train the model
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)

# Calculate accuracy
accuracy = accuracy_score(y_test, predictions)

print("Actual Results:", y_test)
print("Predicted Results:", predictions)
print("Accuracy:", accuracy * 100, "%")