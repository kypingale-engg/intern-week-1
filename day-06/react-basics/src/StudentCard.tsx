interface Student {
  id: number;
  name: string;
  course: string;
  year: number;
}

interface StudentCardProps {
  student: Student;
  onDelete: (id: number) => void;
}

function StudentCard({ student, onDelete }: StudentCardProps) {
  return (
    <div className="student-card">
      <h2>{student.name}</h2>
      <p>
        <strong>Course:</strong> {student.course}
      </p>
      <p>
        <strong>Year:</strong> {student.year}
      </p>

      <button
        className="delete-button"
        onClick={() => onDelete(student.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default StudentCard;