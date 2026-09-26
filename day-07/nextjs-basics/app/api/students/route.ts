import { NextResponse } from "next/server";

const students = [
  {
    id: 1,
    name: "Krushnai",
    course: "Information Technology",
  },
  {
    id: 2,
    name: "Priya",
    course: "Computer Engineering",
  },
  {
    id: 3,
    name: "Rahul",
    course: "Information Technology",
  },
];

export async function GET() {
  return NextResponse.json(students);
}

export async function POST(request: Request) {
  const body = await request.json();

  const newStudent = {
    id: students.length + 1,
    name: body.name,
    course: body.course,
  };

  students.push(newStudent);

  return NextResponse.json(newStudent, {
    status: 201,
  });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  const index = students.findIndex((student) => student.id === id);

  if (index === -1) {
    return NextResponse.json(
      { message: "Student not found" },
      { status: 404 }
    );
  }

  const deletedStudent = students.splice(index, 1)[0];

  return NextResponse.json({
    message: "Student deleted successfully",
    student: deletedStudent,
  });
}