# Day 4 - Machine Learning

## Overview

Day 4 focused on understanding and implementing basic Machine Learning algorithms using Python and scikit-learn.

## Topics Covered

* Supervised Learning
* Unsupervised Learning
* Linear Regression
* Logistic Regression
* Decision Tree
* Random Forest
* K-Nearest Neighbors
* K-Means Clustering
* Train/Test Split
* Model Accuracy
* Mean Absolute Error

## Technology Stack

* Python
* NumPy
* Pandas
* Matplotlib
* Scikit-learn

## Folder Structure

```text
day-04/
├── ml-basics/
│   └── 01_learning_types.py
│
├── ml-models/
│   ├── 02_linear_regression.py
│   ├── 03_logistic_regression.py
│   ├── 04_decision_tree.py
│   ├── 05_random_forest.py
│   └── 06_kmeans_clustering.py
│
├── practical/
│   ├── student_performance.py
│   ├── student_performance_chart.py
│   └── student_performance.png
│
└── README.md
```

## Machine Learning Models Implemented

### Linear Regression

Used Linear Regression to predict salary based on years of experience.

### Logistic Regression

Used Logistic Regression to classify students into Pass or Fail categories based on study hours and attendance.

### Decision Tree

Used a Decision Tree classifier to make Pass or Fail predictions using student data.

### Random Forest

Used Random Forest classification, which combines multiple decision trees to make predictions.

### K-Means Clustering

Used K-Means to group customers based on annual income and spending score.

## Practical Project - Student Performance Prediction

The practical project predicts whether a student is likely to pass or fail using:

* Study hours
* Attendance percentage

### Features

* Student dataset using Pandas
* Data preparation
* Train/Test Split
* Logistic Regression model
* Accuracy calculation
* Prediction for a new student
* Student performance visualization

## Model Evaluation

The practical project used `accuracy_score()` to evaluate classification predictions.

The Linear Regression exercise used Mean Absolute Error (MAE) to measure prediction error.

## Challenges Faced

* Understanding the difference between regression and classification
* Understanding supervised and unsupervised learning
* Understanding train and test datasets
* Understanding how different ML algorithms make predictions

## Solutions

I practiced each algorithm with small datasets and verified the output after every implementation.

## How to Run

Activate the virtual environment:

```powershell
.\venv\Scripts\Activate.ps1
```

Install required libraries:

```powershell
pip install numpy pandas matplotlib scikit-learn
```

Run the practical project:

```powershell
python practical/student_performance.py
```

Run the visualization:

```powershell
python practical/student_performance_chart.py
```

## Result

Successfully implemented basic Machine Learning algorithms and completed a Student Performance Prediction practical project.
