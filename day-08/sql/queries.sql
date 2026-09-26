-- Day 8 - SQL Queries
-- Database: day8_laravel

USE day8_laravel;


-- 1. Get all employees working in a particular department
SELECT 
    e.id,
    e.name,
    e.email,
    e.salary,
    e.designation,
    d.name AS department_name
FROM employees e
JOIN departments d 
    ON e.department_id = d.id
WHERE d.name = 'Information Technology';


-- 2. Find average salary of employees in each department
SELECT 
    d.name AS department_name,
    AVG(e.salary) AS average_salary
FROM departments d
JOIN employees e 
    ON d.id = e.department_id
GROUP BY d.id, d.name;


-- 3. Find the highest-paid employee
SELECT 
    e.id,
    e.name,
    e.email,
    e.salary,
    e.designation,
    d.name AS department_name
FROM employees e
JOIN departments d 
    ON e.department_id = d.id
ORDER BY e.salary DESC
LIMIT 1;


-- 4. Find facilities that are in poor condition
SELECT 
    f.id,
    f.name,
    f.condition,
    f.description,
    d.name AS department_name
FROM facilities f
JOIN departments d 
    ON f.department_id = d.id
WHERE f.condition = 'Poor';


-- 5. Count complaints for each facility
SELECT 
    f.id,
    f.name AS facility_name,
    COUNT(c.id) AS complaint_count
FROM facilities f
LEFT JOIN complaints c 
    ON f.id = c.facility_id
GROUP BY f.id, f.name
ORDER BY complaint_count DESC;


-- 6. Show inspection history of facilities
SELECT 
    f.name AS facility_name,
    e.name AS inspector_name,
    i.inspection_date,
    i.status,
    i.remarks
FROM inspections i
JOIN facilities f 
    ON i.facility_id = f.id
JOIN employees e 
    ON i.employee_id = e.id
ORDER BY i.inspection_date DESC;