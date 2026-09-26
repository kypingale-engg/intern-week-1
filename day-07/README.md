# Day 7 - Next.js + Backend

## Overview

Day 7 focused on Next.js development using the App Router, file-based routing, dynamic routes, navigation, API Route Handlers, and frontend-backend communication.

## Topics Covered

* Next.js App Router
* File-based Routing
* Navigation with Link
* Dynamic Routes
* Server and Client Components
* API Route Handlers
* GET requests
* POST requests
* DELETE requests
* JSON data
* React state with useState()
* useEffect()
* Fetch API
* TypeScript with Next.js

## Technology Stack

* Next.js
* React
* TypeScript
* Node.js
* HTML
* CSS

## Folder Structure

```text
day-07/
├── nextjs-basics/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── api/
│   │   │   └── students/
│   │   │       └── route.ts
│   │   ├── students/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   │   ├── page.tsx
│   │   │   └── ...
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── package.json
│   ├── package-lock.json
│   └── ...
│
└── README.md
```

## Next.js Routing

### File-Based Routing

Pages were created using folders and `page.tsx` files inside the `app` directory.

For example:

```text
app/about/page.tsx
```

creates:

```text
/about
```

### Dynamic Route

The following structure was used:

```text
app/students/[id]/page.tsx
```

This creates dynamic routes such as:

```text
/students/101
/students/202
```

The `id` value is received from the URL.

## Backend API

A Next.js Route Handler was created at:

```text
app/api/students/route.ts
```

### GET

Retrieves the list of students.

```text
GET /api/students
```

### POST

Creates a new student.

```text
POST /api/students
```

### DELETE

Deletes a student using the student ID.

```text
DELETE /api/students
```

## Practical Project - Student Management

A Student Management application was developed using Next.js, React, and TypeScript.

### Features

* Display students
* Add students
* Delete students
* Fetch data from Next.js API
* Form validation
* Dynamic student route
* React state management
* API-based frontend-backend communication
* Responsive styling

## Frontend-Backend Flow

```text
React UI
   ↓
Fetch API
   ↓
Next.js Route Handler
   ↓
Student Data
   ↓
JSON Response
   ↓
React State
   ↓
Updated UI
```

## React Concepts Used

### useState()

Used to store students, form values, and loading state.

### useEffect()

Used to fetch student data when the page loads.

### map()

Used to render multiple students.

### Conditional Rendering

Used to display loading messages, student data, and empty-state messages.

## Challenges Faced

* Understanding Next.js App Router structure
* Creating dynamic routes
* Creating API Route Handlers
* Connecting React frontend with backend APIs
* Handling GET, POST, and DELETE requests
* Understanding Server and Client Components

## Solutions

Each concept was implemented separately and tested through the browser and PowerShell API requests before connecting the complete application.

## Important Note

The current student data is stored in server memory for learning purposes. Restarting the Next.js development server resets the student data.

## How to Run

Go to the Next.js project:

```powershell
cd nextjs-basics
```

Install dependencies:

```powershell
npm install
```

Start the development server:

```powershell
npm run dev
```

Open:

```text
http://localhost:3000
```

Students page:

```text
http://localhost:3000/students
```

API endpoint:

```text
http://localhost:3000/api/students
```

## Result

Successfully completed Next.js routing, dynamic routes, API Route Handlers, frontend-backend communication, and a Student Management practical project.
