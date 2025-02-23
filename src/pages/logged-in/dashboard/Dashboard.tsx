import { useTheme } from "@src/hooks";

export const Dashboard = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="h-full p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <button
          className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          onClick={toggleTheme}
        >
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      <div className="mt-6">
        <p className="text-lg">Your content goes here.</p>
      </div>
    </div>
  );
};
