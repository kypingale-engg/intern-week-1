"use client";

import { FormEvent, useEffect, useState } from "react";

interface Student {
  id: number;
  name: string;
  course: string;
}

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [name, setName] = useState<string>("");
  const [course, setCourse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  async function fetchStudents() {
    try {
      const response = await fetch("/api/students");

      if (!response.ok) {
        throw new Error("Failed to fetch students");
      }

      const data: Student[] = await response.json();

      setStudents(data);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (name.trim() === "" || course.trim() === "") {
      alert("Please fill all fields.");
      return;
    }

    try {
      const response = await fetch("/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          course: course.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add student");
      }

      const newStudent: Student = await response.json();

      setStudents((currentStudents) => [
        ...currentStudents,
        newStudent,
      ]);

      setName("");
      setCourse("");
    } catch (error) {
      console.log("Error:", error);
    }
  }

  async function handleDelete(id: number) {
    try {
      const response = await fetch("/api/students", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete student");
      }

      setStudents((currentStudents) =>
        currentStudents.filter((student) => student.id !== id)
      );
    } catch (error) {
      console.log("Error:", error);
    }
  }

  return (
    <main>
      <h1>Student Management</h1>

      <form onSubmit={handleSubmit}>
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

        <button type="submit">Add Student</button>
      </form>

      <hr />

      <h2>Students</h2>

      {loading ? (
        <p>Loading students...</p>
      ) : students.length > 0 ? (
        students.map((student) => (
          <div key={student.id}>
            <h3>{student.name}</h3>
            <p>Course: {student.course}</p>

            <button onClick={() => handleDelete(student.id)}>
              Delete
            </button>

            <hr />
          </div>
        ))
      ) : (
        <p>No students found.</p>
      )}
    </main>
  );
}