-- Day 8 - Sample Database Data

USE day8_laravel;


-- Departments
INSERT INTO departments (name, location, created_at, updated_at)
VALUES
('Information Technology', 'Block A', NOW(), NOW()),
('Civil Engineering', 'Block B', NOW(), NOW()),
('Mechanical Engineering', 'Block C', NOW(), NOW());


-- Employees
INSERT INTO employees
(department_id, name, email, salary, designation, created_at, updated_at)
VALUES
(1, 'Rahul Sharma', 'rahul@example.com', 55000, 'Software Engineer', NOW(), NOW()),
(1, 'Priya Patil', 'priya@example.com', 65000, 'Senior Software Engineer', NOW(), NOW()),
(2, 'Amit Joshi', 'amit@example.com', 48000, 'Civil Engineer', NOW(), NOW()),
(3, 'Sneha Deshmukh', 'sneha@example.com', 52000, 'Mechanical Engineer', NOW(), NOW());


-- Facilities
INSERT INTO facilities
(department_id, name, description, `condition`, is_available, created_at, updated_at)
VALUES
(1, 'Computer Lab', 'Computer laboratory with desktop systems', 'Good', TRUE, NOW(), NOW()),
(1, 'Networking Lab', 'Networking and server laboratory', 'Poor', TRUE, NOW(), NOW()),
(2, 'Civil Lab', 'Laboratory for civil engineering experiments', 'Good', TRUE, NOW(), NOW()),
(3, 'Mechanical Workshop', 'Workshop for mechanical practicals', 'Poor', FALSE, NOW(), NOW());


-- Inspections
INSERT INTO inspections
(facility_id, employee_id, inspection_date, status, remarks, created_at, updated_at)
VALUES
(1, 1, '2026-09-20', 'Passed', 'All computers are working properly', NOW(), NOW()),
(2, 2, '2026-09-21', 'Needs Repair', 'Some networking equipment needs repair', NOW(), NOW()),
(3, 3, '2026-09-22', 'Passed', 'Equipment is in good condition', NOW(), NOW()),
(4, 4, '2026-09-23', 'Needs Repair', 'Workshop machines require maintenance', NOW(), NOW());


-- Complaints
INSERT INTO complaints
(facility_id, complainant_name, email, description, status, created_at, updated_at)
VALUES
(2, 'Neha Singh', 'neha@example.com', 'Network equipment is not working properly', 'Open', NOW(), NOW()),
(2, 'Rohit Verma', 'rohit@example.com', 'Internet connection is frequently disconnected', 'Open', NOW(), NOW()),
(4, 'Karan Pawar', 'karan@example.com', 'Workshop machine needs maintenance', 'Resolved', NOW(), NOW()),
(1, 'Pooja More', 'pooja@example.com', 'One computer is not starting', 'Open', NOW(), NOW());