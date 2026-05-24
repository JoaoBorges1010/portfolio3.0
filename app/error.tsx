"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 dark:bg-dark bg-basic-white dark:text-basic-white text-dark-text p-8">
      <h2 className="font-header text-3xl font-bold">Something went wrong</h2>
      <p className="text-center max-w-md text-sm opacity-80">
        {error.message || "An unexpected error occurred."}
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="px-6 py-3 bg-light-gray text-basic-white uppercase font-semibold hover:opacity-80 transition"
      >
        Try again
      </button>
    </div>
  );
}
