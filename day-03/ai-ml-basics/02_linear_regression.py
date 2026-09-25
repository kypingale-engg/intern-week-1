from sklearn.linear_model import LinearRegression

# Training data
# Experience in years
X = [[1], [2], [3], [4], [5]]

# Salary in thousands
y = [30, 35, 40, 45, 50]

# Create model
model = LinearRegression()

# Train the model
model.fit(X, y)

# Predict salary for 6 years of experience
prediction = model.predict([[6]])

print("Predicted Salary for 6 years of experience:")
print(prediction[0], "thousand")