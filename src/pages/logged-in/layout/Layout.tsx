import { Outlet } from "react-router-dom";
import { useTheme } from "@src/hooks/useTheme";
import { Sidebar } from "@pages/logged-in/layout/Sidebar";

export const Layout = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`min-h-screen flex ${
        theme === "dark" ? "bg-[#1F1F1F] text-white" : "bg-[#F5F5F5] text-black"
      }`}
    >
      <Sidebar />

      <main className="flex-1 p-6 lg:ml-64">
        <Outlet />
      </main>

      <footer className=""></footer>
    </div>
  );
};
