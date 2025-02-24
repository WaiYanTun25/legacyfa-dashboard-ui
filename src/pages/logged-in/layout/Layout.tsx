import { Outlet } from "react-router-dom";
import { useTheme } from "@src/hooks/useTheme";
import { Sidebar } from "@pages/logged-in/layout/Sidebar";
import { TopNavbar } from "@pages/logged-in/layout/TopNavbar";

export const Layout = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex ${
        theme === "dark" ? "bg-[#1F1F1F] text-white" : "bg-[#F5F5F5] text-black"
      }`}
    >
      <div className="lg:w-64">
        <Sidebar />
      </div>

      <div className="flex-1">
        <TopNavbar />

        <main className="m-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
