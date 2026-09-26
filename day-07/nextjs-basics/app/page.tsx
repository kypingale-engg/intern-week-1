import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Next.js Home Page</h1>

      <p>Welcome to the Day 7 Next.js project.</p>

      <Link href="/about">
        Go to About Page
      </Link>
    </main>
  );
}