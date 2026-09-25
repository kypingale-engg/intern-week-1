from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error

# Input: years of experience
X = [[1], [2], [3], [4], [5], [6], [7], [8]]

# Output: salary in thousands
y = [30, 35, 40, 45, 50, 55, 60, 65]

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42
)

# Create and train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Predict test data
predictions = model.predict(X_test)

print("Actual Salaries:", y_test)
print("Predicted Salaries:", predictions)

# Calculate error
error = mean_absolute_error(y_test, predictions)

print("Mean Absolute Error:", error)

# Predict salary for 9 years of experience
new_prediction = model.predict([[9]])

print("Predicted Salary for 9 years:", new_prediction[0], "thousand")