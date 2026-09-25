# Day 3 - Data & AI/ML

## Overview

Day 3 focused on data handling, data analysis, visualization, and basic Artificial Intelligence and Machine Learning concepts using Python.

## Topics Covered

* NumPy basics
* Pandas DataFrames
* Reading CSV files
* Data filtering and sorting
* GroupBy and aggregation
* Missing values and duplicate handling
* Matplotlib visualization
* Artificial Intelligence basics
* Machine Learning basics
* Deep Learning basics
* Linear Regression
* K-Nearest Neighbors classification
* Train/Test Split
* Model Accuracy

## Technology Stack

* Python
* NumPy
* Pandas
* Matplotlib
* Scikit-learn

## Folder Structure

```text
day-03/
├── data-exercises/
│   ├── 01_numpy_basics.py
│   ├── 02_pandas_basics.py
│   ├── 03_pandas_csv.py
│   ├── 04_pandas_groupby.py
│   ├── 05_pandas_filter_sort.py
│   ├── 06_pandas_cleaning.py
│   ├── 07_matplotlib_basics.py
│   ├── 08_matplotlib_line.py
│   └── 09_department_analysis.py
│
├── data-analysis/
│   ├── employee_analysis.py
│   └── department_salary.png
│
├── ai-ml-basics/
│   ├── 01_ai_ml_basics.py
│   ├── 02_linear_regression.py
│   ├── 03_knn_classification.py
│   └── 04_model_accuracy.py
│
└── README.md
```

## Practical Project - Employee Data Analysis

The practical project analyzes employee data stored in a CSV file.

### Features

* Total employee count
* Average salary
* Highest salary
* Lowest salary
* Department-wise employee count
* Department-wise average salary
* Highest-paid employee
* Filtering employees based on salary
* Department salary visualization

## Machine Learning Examples

### Linear Regression

A simple Linear Regression model was used to predict salary based on years of experience.

### KNN Classification

A K-Nearest Neighbors model was used to classify whether a student is likely to pass or fail using study hours and attendance.

### Model Accuracy

The dataset was divided into training and testing data using `train_test_split()`, and prediction accuracy was calculated using `accuracy_score()`.

## Challenges Faced

* Understanding Pandas DataFrames and filtering
* Handling missing values and duplicate records
* Understanding the difference between regression and classification
* Understanding training and testing data

## Solutions

I practiced each concept using small Python programs and tested the output after every implementation.

## How to Run

Activate the virtual environment:

```powershell
.\venv\Scripts\Activate.ps1
```

Install required libraries:

```powershell
pip install numpy pandas matplotlib scikit-learn
```

Run individual programs using:

```powershell
python data-exercises/01_numpy_basics.py
```

or:

```powershell
python data-analysis/employee_analysis.py
```

## Result

Successfully completed the Day 3 data analysis and basic AI/ML practical exercises.
