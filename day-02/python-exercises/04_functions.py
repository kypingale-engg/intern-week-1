# Python Functions

def greet_user(name):
    print("Hello", name)


def calculate_salary(basic_salary, bonus):
    total_salary = basic_salary + bonus
    return total_salary


def check_even_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"


# Calling functions

greet_user("Krushnai")

salary = calculate_salary(40000, 5000)
print("Total Salary:", salary)

result = check_even_odd(10)
print("Number is:", result)