# Day 6 - TypeScript + React

## Overview

Day 6 focused on TypeScript fundamentals and React development using TypeScript.

## Topics Covered

### TypeScript

* Basic types
* Typed variables
* Arrays and objects
* Functions with types
* Interfaces
* Optional properties
* Union types
* Type aliases
* Enums
* Generics

### React

* React with TypeScript
* Components
* Props
* useState()
* useEffect()
* API fetching
* map()
* Conditional rendering
* Forms
* Event handling
* Reusable components

## Technology Stack

* TypeScript
* React
* Vite
* Node.js
* HTML
* CSS

## Folder Structure

```text
day-06/
├── typescript-basics/
│   ├── 01_types_basics.ts
│   ├── 02_functions_interfaces.ts
│   ├── 03_union_alias_enum.ts
│   └── 04_generics.ts
│
├── react-basics/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── App.css
│   │   └── StudentCard.tsx
│   ├── package.json
│   └── ...
│
├── practical/
└── README.md
```

## TypeScript Practice

### Interfaces

Interfaces were used to define the structure of objects and component props.

### Union Types

Union types were used to allow a variable to contain more than one permitted type.

### Type Aliases

Type aliases were used to create reusable type definitions.

### Enums

Enums were used to represent a fixed set of named values.

### Generics

Generics were used to create reusable type-safe functions.

## React Practical Project - Student Management Dashboard

A Student Management Dashboard was created using React and TypeScript.

### Features

* Display students
* Add a student
* Delete a student
* Search students by name
* Form validation
* Reusable StudentCard component
* Type-safe student data

## React Concepts Used

### Components

The application was divided into reusable components.

### Props

Student data and delete functionality were passed from the main component to `StudentCard`.

### State

`useState()` was used to manage students, form values, and search text.

### API Handling

`useEffect()` and `fetch()` were practiced to retrieve API data and display it in React.

### Conditional Rendering

Different UI content was displayed based on the current application state.

### Array Rendering

`map()` was used to display multiple students.

### Filtering

`filter()` was used to search and remove students.

## Challenges Faced

* Understanding strict TypeScript type checking
* Understanding interfaces and generics
* Understanding React state and props
* Handling API data in React
* Fixing TypeScript compilation errors

## Solutions

Each concept was implemented using small examples and tested before moving to the next topic.

## How to Run TypeScript Examples

From the Day 6 directory:

```powershell
npx tsc
```

Run a generated JavaScript file:

```powershell
node typescript-basics/01_types_basics.js
```

## How to Run React Project

Go to the React project:

```powershell
cd react-basics
```

Install dependencies:

```powershell
npm install
```

Start the development server:

```powershell
npm run dev
```

Open the local Vite URL shown in the terminal.

## Result

Successfully completed TypeScript fundamentals, React with TypeScript exercises, and a Student Management Dashboard practical project.
