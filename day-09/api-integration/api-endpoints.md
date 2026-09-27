
# API Integration

## Backend

The Facility Inspection Dashboard uses a Laravel REST API backend.

**Base URL**

http://127.0.0.1:8000/api

---

## Facility APIs

### Get all facilities

**Method:** GET

**Endpoint:**
`/facilities`

**Full URL:**
`http://127.0.0.1:8000/api/facilities`

**Purpose:**  
Fetches all facility records from the database.

---

### Get facility by ID

**Method:** GET

**Endpoint:**
`/facilities/{id}`

**Example:**
`/facilities/1`

**Purpose:**  
Fetches details of a specific facility.

---

### Create facility

**Method:** POST

**Endpoint:**
`/facilities`

**Purpose:**  
Creates a new facility record.

---

### Update facility

**Method:** PUT/PATCH

**Endpoint:**
`/facilities/{id}`

**Purpose:**  
Updates an existing facility record.

---

### Delete facility

**Method:** DELETE

**Endpoint:**
`/facilities/{id}`

**Purpose:**  
Deletes a facility record.

---

## Inspection APIs

### Get all inspections

**Method:** GET

**Endpoint:**
`/inspections`

**Full URL:**
`http://127.0.0.1:8000/api/inspections`

**Purpose:**  
Fetches inspection history records.

---

### Get inspection by ID

**Method:** GET

**Endpoint:**
`/inspections/{id}`

**Example:**
`/inspections/1`

**Purpose:**  
Fetches a specific inspection record.

---

### Create inspection

**Method:** POST

**Endpoint:**
`/inspections`

**Purpose:**  
Creates a new inspection record.

**Example request body:**

```json
{
  "facility_id": 1,
  "employee_id": 1,
  "inspection_date": "2026-09-27",
  "status": "Passed",
  "remarks": "Inspection completed successfully"
}
````

---

### Update inspection

**Method:** PUT/PATCH

**Endpoint:**
`/inspections/{id}`

**Purpose:**
Updates an existing inspection record.

---

### Delete inspection

**Method:** DELETE

**Endpoint:**
`/inspections/{id}`

**Purpose:**
Deletes an inspection record.

---

## Angular API Service

The Angular application communicates with the Laravel backend using Angular `HttpClient`.

The main service is:

`src/app/services/api.ts`

### Methods used by Angular

* `getFacilities()` — retrieves facility data
* `getInspections()` — retrieves inspection history
* `addInspection()` — creates a new inspection

---

## Error Handling

API requests use RxJS `subscribe()` with `next` and `error` handlers.

If the backend is unavailable, the application displays an error message to the user instead of silently failing.

---

## API Flow

```text
Angular Component
       |
       v
Angular API Service
       |
       v
HttpClient
       |
       v
Laravel REST API
       |
       v
MySQL Database
       |
       v
JSON Response
       |
       v
Angular UI
```

```

