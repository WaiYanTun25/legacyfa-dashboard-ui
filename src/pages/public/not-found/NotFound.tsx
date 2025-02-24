import React from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {}
      <div className="max-w-md w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
        {}
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-9xl font-bold text-primary dark:text-blue-400 animate-bounce">
            404
          </h1>
        </div>

        {}
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
          It seems the page you’re looking for doesn’t exist or has been moved.
          Let’s get you back on track!
        </p>

        {}
        <div className="flex items-center justify-center">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-primary dark:bg-blue-500 text-white rounded-full hover:bg-primary-dark dark:hover:bg-blue-600 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};
