````markdown
# Day 9 - Angular + TypeScript + API Integration

## Project Title

### Facility Inspection Dashboard

A web-based Facility Inspection Dashboard developed using Angular, TypeScript and a Laravel REST API.

The application allows users to monitor facility status, search and sort facilities, view facility details, create inspections and view inspection history.

---

## Technologies Used

- Angular
- TypeScript
- HTML
- CSS
- Angular Reactive Forms
- Angular Router
- Angular HttpClient
- RxJS
- Laravel REST API
- MySQL
- VS Code

---

## Angular Concepts Covered

### Components

The application is divided into reusable Angular components and pages.

Main pages:

- Dashboard
- Inspection Form
- Inspection History

### Templates

Angular HTML templates are used to display dynamic data received from the API.

### Data Binding

The project uses:

- Interpolation
- Property binding
- Event binding
- Two-way binding

Example:

```html
<input
  type="text"
  [(ngModel)]="searchText"
/>
````

### Directives

Angular directives used in the project include:

* `*ngFor`
* `*ngIf`
* `[class...]`

### Pipes

The Date pipe is used to format inspection dates.

Example:

```html
{{ inspection.inspection_date | date:'dd MMM yyyy' }}
```

### Services and Dependency Injection

The `Api` service is used to communicate with the Laravel backend.

Angular Dependency Injection provides the service to components.

### Routing

Angular Router is used for navigation between:

* Dashboard
* Inspection History
* New Inspection

### Reactive Forms

The Inspection Form uses Angular Reactive Forms with validation.

Validation includes:

* Required facility
* Required employee ID
* Positive employee ID
* Required inspection date
* Required status
* Minimum remarks length

### HttpClient and Observables

Angular `HttpClient` is used to send HTTP requests to the Laravel REST API.

RxJS Observables are used to handle asynchronous API responses.

---

## Project Features

### Dashboard

The dashboard displays:

* Total Facilities
* Available Facilities
* Passed Inspections
* Facilities Needing Repair

### Facility Search

Users can search facilities by name.

### Facility Sorting

Facilities can be sorted by:

* Name
* Condition

Ascending and descending sorting is supported.

### Facility Details

The View button opens a facility details popup containing:

* Facility ID
* Facility Name
* Description
* Condition
* Availability
* Department ID

### New Inspection

Users can create a new inspection by entering:

* Facility
* Employee ID
* Inspection Date
* Status
* Remarks

### Inspection History

The application displays previous inspection records.

Users can:

* Search inspection records
* Filter by inspection status
* View inspection date
* View remarks

### API Error Handling

The application displays user-friendly error messages when the backend API is unavailable.

---

## REST API Integration

The Angular application communicates with the Laravel backend.

### Base URL

`http://127.0.0.1:8000/api`

### APIs Used

#### Facilities

```text
GET    /facilities
GET    /facilities/{id}
POST   /facilities
PUT    /facilities/{id}
PATCH  /facilities/{id}
DELETE  /facilities/{id}
```

#### Inspections

```text
GET    /inspections
GET    /inspections/{id}
POST   /inspections
PUT    /inspections/{id}
PATCH  /inspections/{id}
DELETE /inspections/{id}
```

Detailed API documentation is available in:

`api-integration/api-endpoints.md`

---

## Project Structure

```text
day-09/
│
├── angular-app/
│   ├── src/
│   │   └── app/
│   │       ├── models/
│   │       │   ├── facility.ts
│   │       │   └── inspection.ts
│   │       │
│   │       ├── pages/
│   │       │   ├── dashboard/
│   │       │   ├── inspection-form/
│   │       │   └── inspection-history/
│   │       │
│   │       ├── services/
│   │       │   └── api.ts
│   │       │
│   │       ├── app.config.ts
│   │       ├── app.routes.ts
│   │       └── app.html
│   │
│   └── ...
│
├── api-integration/
│   └── api-endpoints.md
│
└── README.md
```

---

## How to Run the Project

### 1. Start Laravel Backend

Open a terminal in:

```text
day-08/laravel-basics
```

Run:

```powershell
php artisan serve
```

The backend will run at:

```text
http://127.0.0.1:8000
```

### 2. Start Angular Application

Open another terminal in:

```text
day-09/angular-app
```

Run:

```powershell
ng serve
```

Open:

```text
http://localhost:4200
```

---

## Testing Performed

The following functionality was tested:

* Dashboard loads facility data from API
* Dashboard metrics display correctly
* Facility search works
* Facility sorting works
* Facility details popup works
* New inspection form opens correctly
* Reactive form validation works
* New inspection can be saved through API
* Inspection appears in history after saving
* Inspection history search works
* Inspection status filtering works
* API error messages were tested by stopping the Laravel server

---

## Problems and Solutions

### Problem 1 - Angular Starter Page

The default Angular starter page was displayed instead of the dashboard.

**Solution:**

Configured Angular routing and used:

```html
<router-outlet></router-outlet>
```

in the root template.

### Problem 2 - API Requests

The Angular application initially could not display backend data when the API server was not running.

**Solution:**

Started the Laravel server and configured the Angular API service with the Laravel API base URL.

### Problem 3 - Search and Filtering

Search and filtering required Angular form binding.

**Solution:**

Used `FormsModule` and `[(ngModel)]` for search and status filtering.

### Problem 4 - Form Validation

The inspection form needed proper validation.

**Solution:**

Used Angular
