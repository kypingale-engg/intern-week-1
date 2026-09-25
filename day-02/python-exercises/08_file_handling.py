# Python File Handling

# Write data to a file
with open("employees.txt", "w") as file:
    file.write("Rahul - IT\n")
    file.write("Priya - HR\n")
    file.write("Amit - Finance\n")

print("Data written successfully.")


# Read data from the file
with open("employees.txt", "r") as file:
    data = file.read()

print("\nEmployee Data:")
print(data)


# Add new data to the file
with open("employees.txt", "a") as file:
    file.write("Sneha - IT\n")

print("New employee added successfully.")