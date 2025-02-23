import { Outlet } from "react-router-dom";
import { useTheme } from "@src/hooks/useTheme";

export const Layout = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen`}
    >
      <nav className="fixed left-0 top-0 h-full w-64shadow-lg">
        <h1>testing</h1>
      </nav>

      <main className="ml-64 p-8">
        <Outlet />
      </main>

      <footer className=""></footer>
    </div>
  );
};
