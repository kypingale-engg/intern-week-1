# Day 8 – Database + Laravel

## Overview

This project covers relational database concepts and backend API development using Laravel.

The practical work includes:

* MySQL database design
* Tables, rows, columns and keys
* Primary keys and foreign keys
* Table relationships
* SQL CRUD operations
* SELECT, WHERE, ORDER BY and GROUP BY
* JOIN queries
* Aggregate functions
* Laravel routing
* Controllers
* Models
* Migrations
* Eloquent ORM
* Validation
* REST API development
* CRUD APIs

## Database

Database used:

```text
day8_laravel
```

### Tables

The database contains the following tables:

* users
* departments
* employees
* facilities
* inspections
* complaints

### Relationships

The main relationships are:

```text
Department
    |
    ├── Employees
    └── Facilities
            |
            ├── Inspections
            └── Complaints
```

* A department can have many employees.
* A department can have many facilities.
* A facility can have many inspections.
* A facility can have many complaints.
* An inspection belongs to a facility and an employee.
* A complaint belongs to a facility.

## SQL Queries

The `sql/` folder contains:

```text
sql/
├── queries.sql
└── sample_data.sql
```

The SQL queries demonstrate:

1. Employees working in a particular department
2. Average salary of employees in each department
3. Highest-paid employee
4. Facilities in poor condition
5. Complaint count for each facility
6. Inspection history of facilities

## Laravel API

The Laravel project is located in:

```text
laravel-basics/
```

The application follows the request flow:

```text
Request
   ↓
Route
   ↓
Controller
   ↓
Model
   ↓
Database
   ↓
JSON Response
```

## API Endpoints

### Facilities

| Method    | Endpoint               | Description        |
| --------- | ---------------------- | ------------------ |
| GET       | `/api/facilities`      | Get all facilities |
| POST      | `/api/facilities`      | Create a facility  |
| GET       | `/api/facilities/{id}` | Get one facility   |
| PUT/PATCH | `/api/facilities/{id}` | Update a facility  |
| DELETE    | `/api/facilities/{id}` | Delete a facility  |

### Inspections

| Method    | Endpoint                | Description          |
| --------- | ----------------------- | -------------------- |
| GET       | `/api/inspections`      | Get all inspections  |
| POST      | `/api/inspections`      | Create an inspection |
| GET       | `/api/inspections/{id}` | Get one inspection   |
| PUT/PATCH | `/api/inspections/{id}` | Update an inspection |
| DELETE    | `/api/inspections/{id}` | Delete an inspection |

### Complaints

| Method    | Endpoint               | Description        |
| --------- | ---------------------- | ------------------ |
| GET       | `/api/complaints`      | Get all complaints |
| POST      | `/api/complaints`      | Create a complaint |
| GET       | `/api/complaints/{id}` | Get one complaint  |
| PUT/PATCH | `/api/complaints/{id}` | Update a complaint |
| DELETE    | `/api/complaints/{id}` | Delete a complaint |

## API Testing

The CRUD APIs were tested using PowerShell HTTP requests.

### Facilities

* GET tested successfully
* POST tested successfully
* PUT tested successfully
* DELETE tested successfully

### Inspections

* GET tested successfully
* POST tested successfully
* PUT tested successfully
* DELETE tested successfully

### Complaints

* GET tested successfully
* POST tested successfully
* PUT tested successfully
* DELETE tested successfully

Temporary records created during CRUD testing were deleted after testing.

## Technologies Used

* PHP 8.4
* Laravel 13
* MySQL 9.4
* Eloquent ORM
* REST APIs
* PowerShell
* Git and GitHub

## How to Run

Navigate to the Laravel project:

```powershell
cd laravel-basics
```

Start the Laravel development server:

```powershell
php artisan serve
```

The API is available at:

```text
http://127.0.0.1:8000
```

Example:

```text
http://127.0.0.1:8000/api/facilities
```

## Learning Outcome

Through this task, I learned how to design relational databases, create relationships between tables, write SQL queries, and build CRUD REST APIs using Laravel and Eloquent ORM.
