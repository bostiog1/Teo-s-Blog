import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center">
      <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-200 mb-4">
          404
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Sorry, that page cannot be found.
        </p>
        <Link
          to="/"
          className="text-blue-500 dark:text-blue-300 hover:underline"
        >
          Back to the homepage...
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
