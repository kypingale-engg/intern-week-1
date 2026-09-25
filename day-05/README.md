# Day 5 - JavaScript

## Overview

Day 5 focused on JavaScript fundamentals, modern JavaScript features, browser APIs, asynchronous programming, and practical DOM development.

## Topics Covered

* Variables and Data Types
* Functions
* Scope
* Arrow Functions
* Arrays
* map()
* filter()
* reduce()
* Objects
* Destructuring
* Spread Operator
* Rest Operator
* Promises
* async/await
* DOM
* Events
* Fetch API
* JSON
* JavaScript Modules
* Error Handling
* Local Storage

## Technology Stack

* JavaScript
* HTML
* Node.js

## Folder Structure

```text
day-05/
├── js-basics/
│   ├── 01_variables_datatypes.js
│   ├── 02_functions_scope.js
│   ├── 03_array_methods.js
│   ├── 04_objects_destructuring.js
│   ├── 05_promises_async.js
│   ├── 08_math.js
│   └── 08_modules.js
│
├── exercises/
│   ├── 06_dom_events.html
│   ├── 07_fetch_api.html
│   └── 09_error_localstorage.html
│
├── practical/
│   ├── index.html
│   └── script.js
│
├── package.json
└── README.md
```

## Practical Project - Task Manager

A simple browser-based Task Manager was created using JavaScript.

### Features

* Add tasks
* Delete tasks
* Display tasks dynamically
* Store tasks in Local Storage
* Restore saved tasks after refreshing the browser
* Input validation

## JavaScript Concepts Used in the Project

### DOM

JavaScript was used to select and modify HTML elements dynamically.

### Events

Click events were used for adding and deleting tasks.

### Arrays

An array was used to store the list of tasks.

### Local Storage

`localStorage` was used to save tasks in the browser so that data remains after page refresh.

### JSON

`JSON.stringify()` was used to store the task array and `JSON.parse()` was used to read it back.

## Asynchronous JavaScript

Promises and `async/await` were practiced using a simulated asynchronous operation.

The Fetch API was also used to retrieve JSON data from an API and display it on a webpage.

## Modules

JavaScript code was separated into multiple files using `export` and `import`.

## Error Handling

`try`, `catch`, and `throw` were practiced to handle invalid input and errors.

## Challenges Faced

* Understanding asynchronous JavaScript
* Understanding DOM events
* Understanding JavaScript modules
* Working with Local Storage and JSON

## Solutions

Each concept was practiced using small examples and tested immediately in Node.js or the browser.

## How to Run

### JavaScript Files

Run JavaScript programs using Node.js:

```powershell
node js-basics/01_variables_datatypes.js
```

### HTML Exercises

Open the HTML files directly in a browser.

### Practical Project

Open:

```text
practical/index.html
```

in a web browser.

## Result

Successfully completed JavaScript fundamentals, modern JavaScript concepts, browser-based exercises, and a practical Task Manager project.
