
import { useState } from "react";
import "./App.css";
import StudentCard from "./StudentCard";

interface Student {
  id: number;
  name: string;
  course: string;
  year: number;
}

function App() {
  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      name: "Krushnai",
      course: "Information Technology",
      year: 4,
    },
    {
      id: 2,
      name: "Priya",
      course: "Computer Engineering",
      year: 4,
    },
    {
      id: 3,
      name: "Rahul",
      course: "Information Technology",
      year: 3,
    },
  ]);

  const [name, setName] = useState<string>("");
  const [course, setCourse] = useState<string>("");
  const [year, setYear] = useState<number>(1);
  const [search, setSearch] = useState<string>("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (name.trim() === "" || course.trim() === "") {
      alert("Please fill all fields.");
      return;
    }

    const newStudent: Student = {
      id: Date.now(),
      name: name.trim(),
      course: course.trim(),
      year: year,
    };

    setStudents([...students, newStudent]);

    setName("");
    setCourse("");
    setYear(1);
  }

  function handleDelete(id: number) {
    setStudents(students.filter((student) => student.id !== id));
  }

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">
      <h1 className="title">Student Management Dashboard</h1>

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <input
              type="text"
              placeholder="Student Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <input
              type="text"
              placeholder="Course"
              value={course}
              onChange={(event) => setCourse(event.target.value)}
            />

            <input
              type="number"
              min="1"
              max="4"
              value={year}
              onChange={(event) => setYear(Number(event.target.value))}
            />
          </div>

          <button type="submit">Add Student</button>
        </form>
      </div>

      <div className="search-card">
        <input
          type="text"
          placeholder="Search student"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <h2>Students</h2>

      <div className="student-grid">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p>No students found.</p>
        )}
      </div>
    </div>
  );
}

export default App;

