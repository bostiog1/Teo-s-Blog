import { useSelector } from "react-redux";

function ErrorPage() {
  const error = useSelector((state) => state.posts.error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 dark:bg-red-800 text-red-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Error Occurred</h1>
      {error ? (
        <p className="text-lg">{error}</p>
      ) : (
        <p className="text-lg">An unknown error occurred.</p>
      )}
      <a href="/" className="mt-4 text-blue-500 hover:underline">
        Back to Home
      </a>
    </div>
  );
}

export default ErrorPage;
