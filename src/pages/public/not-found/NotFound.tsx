import { useTheme } from "@src/hooks";
import React from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <div
      className={` shadow-sm p-5 lg:ml-5 rounded-2xl flex h-[88vh] items-center justify-center transition-colors duration-300 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div className="max-w-md w-full p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-9xl font-bold text-primary animate-bounce">
            404
          </h1>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-center">
          Oops! Page Not Found
        </h2>
        <p className=" mb-6 text-center">
          It seems the page you’re looking for doesn’t exist or has been moved.
          Let’s get you back on track!
        </p>

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
