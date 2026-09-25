# Lambda Functions and List Comprehensions

# Lambda function
square = lambda number: number * number

print("Square of 5:", square(5))


# Normal list
numbers = [1, 2, 3, 4, 5]

# List comprehension to create squares
squares = [number * number for number in numbers]

print("Squares:", squares)


# List comprehension with condition
even_numbers = [number for number in numbers if number % 2 == 0]

print("Even Numbers:", even_numbers)