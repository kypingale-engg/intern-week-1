import csv

FILE_NAME = "employees.csv"


def analyze_csv():
    try:
        with open(FILE_NAME, "r") as file:
            reader = csv.DictReader(file)
            employees = list(reader)

        if not employees:
            print("No records found.")
            return

        print("\n===== CSV Analysis =====")

        # Record count
        print("Total Records:", len(employees))

        # Missing values
        missing_values = 0

        for employee in employees:
            for value in employee.values():
                if value == "":
                    missing_values += 1

        print("Missing Values:", missing_values)

        # Duplicate records
        duplicate_records = len(employees) - len(
            set(tuple(employee.items()) for employee in employees)
        )

        print("Duplicate Records:", duplicate_records)

        # Salary statistics
        salaries = []

        for employee in employees:
            salaries.append(float(employee["salary"]))

        average_salary = sum(salaries) / len(salaries)

        print("Average Salary:", average_salary)
        print("Minimum Salary:", min(salaries))
        print("Maximum Salary:", max(salaries))

        # Department-wise statistics
        print("\nDepartment-wise Statistics:")

        departments = {}

        for employee in employees:
            department = employee["department"]
            salary = float(employee["salary"])

            if department not in departments:
                departments[department] = []

            departments[department].append(salary)

        for department, salary_list in departments.items():

            average = sum(salary_list) / len(salary_list)

            print(
                department,
                "- Employees:",
                len(salary_list),
                "- Average Salary:",
                average
            )

    except FileNotFoundError:
        print("CSV file not found.")

    except ValueError:
        print("Invalid salary value in CSV file.")


analyze_csv()