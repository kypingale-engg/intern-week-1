interface StudentPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function StudentPage({
  params,
}: StudentPageProps) {
  const { id } = await params;

  return (
    <main>
      <h1>Student Details</h1>
      <p>Student ID: {id}</p>
    </main>
  );
}