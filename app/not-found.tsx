import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 dark:bg-dark bg-basic-white dark:text-basic-white text-dark-text p-8">
      <h2 className="font-header text-4xl font-bold">404</h2>
      <p className="text-center">This page could not be found.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-light-gray text-basic-white uppercase font-semibold hover:opacity-80 transition"
      >
        Back to home
      </Link>
    </div>
  );
}
