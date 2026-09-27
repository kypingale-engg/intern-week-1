# Smart Facility Management Dashboard

A web-based facility management system developed as the final project for the internship technical training program.

The system helps organizations manage facilities, monitor inspections, and track complaints through a centralized dashboard.

---

## 1. Project Overview

The Smart Facility Management Dashboard provides a centralized platform for managing institutional facilities.

Instead of maintaining facility information, inspection records, and complaints separately, the system provides a single web interface where users can:

- View facility information
- Monitor facility conditions
- Review inspection records
- Track complaints
- Search and filter records
- View dashboard statistics
- Refresh data directly from REST APIs

The project follows a frontend-backend-database architecture.

---

## 2. Problem Statement

Managing facilities manually can make it difficult to track:

- Available facilities
- Facility conditions
- Inspection history
- Maintenance requirements
- Reported complaints

A centralized facility management system can make this information easier to access and maintain.

The objective of this project is to develop a responsive dashboard that connects a modern frontend with REST APIs and a relational database.

---

## 3. Features

### Dashboard

- Total facilities count
- Total inspections count
- Passed inspections count
- Inspections requiring repair
- Total complaints
- Facility overview
- Recent inspection records

### Facilities

- View all facilities
- Search facilities
- View facility condition
- View facility descriptions
- Facility identification

### Inspections

- View inspection records
- Search inspection records
- Filter by inspection status
- View inspector information
- View inspection date
- View inspection remarks

### Complaints

- View complaint records
- Search complaints
- Filter complaints by status
- View complaint date
- View complaint description
- Track pending and resolved complaints

### Angular Module

The project also includes an Angular-based facility inspection module developed during the earlier internship task.

It demonstrates:

- Angular routing
- Reactive forms
- REST API integration
- Facility inspection history
- Facility search and filtering

---

## 4. Technology Stack

### Frontend

- React
- Vite
- JavaScript
- React Router
- Axios
- Lucide React
- HTML5
- CSS3

### Angular Module

- Angular
- TypeScript
- Angular Router
- Reactive Forms

### Backend

- Laravel
- PHP
- REST API

### Database

- MySQL

### Development Tools

- Visual Studio Code
- Git
- GitHub
- Postman
- PowerShell

---

## 5. Architecture

The application follows a three-layer architecture:

```text
+-----------------------------+
|          Frontend           |
|      React + Vite           |
|                             |
| Dashboard | Facilities      |
| Inspections | Complaints    |
+-------------+---------------+
              |
              | REST API
              v
+-----------------------------+
|          Backend            |
|          Laravel            |
|                             |
| Controllers | Models        |
| Routes | API Resources      |
+-------------+---------------+
              |
              |
              v
+-----------------------------+
|          Database           |
|           MySQL             |
|                             |
| Users                       |
| Departments                 |
| Employees                   |
| Facilities                  |
| Inspections                 |
| Complaints                  |
+-----------------------------+