# Python Conditions and Loops

employees = [
    {"name": "Rahul", "salary": 45000},
    {"name": "Priya", "salary": 60000},
    {"name": "Amit", "salary": 35000}
]

print("Employee Salary Status:")

for employee in employees:
    if employee["salary"] >= 50000:
        status = "High Salary"
    elif employee["salary"] >= 40000:
        status = "Average Salary"
    else:
        status = "Low Salary"

    print(employee["name"], "-", employee["salary"], "-", status)


print("\nNumbers from 1 to 10:")

for number in range(1, 11):
    print(number)


print("\nEven Numbers from 1 to 10:")

number = 1

while number <= 10:
    if number % 2 == 0:
        print(number)

    number += 1