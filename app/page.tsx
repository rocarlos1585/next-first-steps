import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center  p-24">
      <span className="text-9xl">hello world</span>

      <Link href={'/about'}> About Page</Link>
    </main>
  );
}
