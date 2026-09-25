# CSV Analysis

## Project Overview

This project is a Python-based CSV analyzer that reads employee data from a CSV file and generates useful statistics.

## Problem Statement

CSV files can contain a large amount of data. Manually checking records, missing values, duplicates, and salary statistics can be time-consuming.

This program automatically analyzes employee data and displays important information.

## Features

- Count total records
- Detect missing values
- Detect duplicate records
- Calculate average salary
- Find minimum salary
- Find maximum salary
- Generate department-wise statistics

## Technology Stack

- Python
- CSV module

## Files

- `employees.csv` - Contains employee data.
- `analyze_csv.py` - Reads and analyzes the CSV file.

## How It Works

1. The program reads the CSV file using Python's `csv` module.
2. Employee records are stored in a list.
3. The program counts the total records.
4. It checks for missing and duplicate values.
5. Salary statistics are calculated.
6. Department-wise employee statistics are displayed.

## How to Run

Open the terminal in the `csv-analysis` folder.

Run:

```bash
python analyze_csv.py