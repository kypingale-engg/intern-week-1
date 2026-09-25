# Day 2 - Python Development

## Project Overview

Day 2 focused on learning Python programming and applying the concepts through practical projects.

The day included Python exercises, an Employee Management System, and a CSV data analysis program.

## Objectives

* Learn Python syntax and programming concepts.
* Work with Python data types and collections.
* Use functions, lambda functions, and list comprehensions.
* Understand modules and exception handling.
* Work with files and JSON/CSV data.
* Understand classes, objects, inheritance, and encapsulation.
* Use virtual environments and pip.
* Build practical Python applications.

## Topics Covered

* Python Syntax
* Variables and Data Types
* Lists, Tuples, Sets, and Dictionaries
* Conditions and Loops
* Functions
* Lambda Functions
* List Comprehensions
* Modules and Packages
* Exception Handling
* File Handling
* Classes and Objects
* Inheritance
* Encapsulation
* Virtual Environments
* pip

## Projects

### 1. Python Exercises

The `python-exercises` folder contains programs demonstrating the Python concepts covered during Day 2.

### 2. Employee Management System

A command-line employee management application using Python and JSON.

Features:

* Add Employee
* Display Employees
* Update Employee
* Delete Employee
* Search Employee
* Filter Employees
* Sort Employees
* Employee Statistics
* JSON data storage
* Exception handling
* Duplicate ID validation

### 3. CSV Analysis

A Python program that analyzes employee data stored in a CSV file.

Features:

* Total record count
* Missing value detection
* Duplicate record detection
* Average salary
* Minimum salary
* Maximum salary
* Department-wise statistics

## Technology Stack

* Python 3
* JSON
* CSV
* Command Line Interface
* Git and GitHub

## Project Structure

```text
day-02/
├── python-exercises/
│   ├── 01_variables_datatypes.py
│   ├── 02_collections.py
│   ├── 03_conditions_loops.py
│   ├── 04_functions.py
│   ├── 05_lambda_comprehension.py
│   ├── 06_modules.py
│   ├── 07_exception_handling.py
│   ├── 08_file_handling.py
│   ├── 09_classes_objects.py
│   └── 10_inheritance_encapsulation.py
│
├── management-system/
│   ├── app.py
│   ├── employees.json
│   └── README.md
│
├── csv-analysis/
│   ├── analyze_csv.py
│   ├── employees.csv
│   └── README.md
│
└── README.md
```

## Installation

Python 3.x is required.

No external Python packages are required for the projects.

A Python virtual environment was also created for the Day 2 work.

## How to Run

### Python Exercises

Open the `python-exercises` folder and run any exercise using:

```bash
python filename.py
```

### Employee Management System

Open the `management-system` folder and run:

```bash
python app.py
```

### CSV Analysis

Open the `csv-analysis` folder and run:

```bash
python analyze_csv.py
```

## Testing

The Employee Management System was tested for:

* Adding employee records
* Displaying employee records
* Updating employee records
* Deleting employee records
* Searching employees
* Filtering employees
* Sorting employees
* Calculating statistics
* Invalid salary input
* Duplicate employee IDs

The CSV analyzer was tested for:

* Record counting
* Missing value detection
* Duplicate detection
* Salary calculations
* Department-wise statistics

## Challenges Faced

* Understanding Python syntax and indentation.
* Handling invalid input using exception handling.
* Reading and writing JSON data.
* Processing CSV records.
* Calculating employee statistics.
* Organizing the project into separate modules and folders.

## Solutions

Python functions were used to separate different operations and keep the programs maintainable.

Exception handling was used to handle invalid input and file-related problems.

JSON was used for employee data storage, while Python's built-in CSV module was used for CSV analysis.

## Future Improvements

* Add a graphical user interface.
* Connect the Employee Management System to a database.
* Add authentication.
* Add more employee information.
* Generate graphical reports from CSV data.
* Add automated testing.

## Daily Checklist

* [x] Python learning material completed
* [x] Python exercises completed
* [x] Employee Management System completed
* [x] CSV Analysis completed
* [x] README documentation completed
* [x] Programs tested
* [x] Challenges and solutions documented
* [ ] Git commit and push
