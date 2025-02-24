import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@src/hooks/useTheme";
import {
  ChartBarIcon,
  ChartPieIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  ChatBubbleLeftIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";
import { useAuth, useModal } from "@src/hooks";
import { ConfirmationModal } from "@src/components/ConfirmModal";

const navigationItems = [
  { name: "Dashboard", path: "/", icon: ChartBarIcon },
  { name: "Sales Analytics", path: "/analytics", icon: ChartPieIcon },
  { name: "Products", path: "/products", icon: ShoppingBagIcon },
  { name: "Orders", path: "/orders", icon: ShoppingCartIcon },
  { name: "Messages", path: "/messages", icon: ChatBubbleLeftIcon },
  { name: "Customers", path: "/customers", icon: UserGroupIcon },
  { name: "Settings", path: "/settings", icon: Cog6ToothIcon },
];

export const Sidebar = ({
  isMobileMenuOpen,
  toggleMobileMenu,
  setIsMobileMenuOpen,
}: {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  setIsMobileMenuOpen: (value: boolean) => void;
}) => {
  const { theme } = useTheme();
  const { logout } = useAuth();
  const { isOpen, openModal, closeModal, modalProps } = useModal();
  const navigate = useNavigate();
  const location = useLocation();

  const handleConfirmAction = () => {
    navigate("/login");
    logout();
  };

  const handleOpenModal = () => {
    openModal({
      title: "Confirm Deletion",
      message: "Are you sure you want to logout ?",
      confirmText: "Logout",
      cancelText: "Cancel",
    });
  };

  return (
    <>
      {isMobileMenuOpen && (
        <div
          className={`lg:hidden fixed inset-0 bg-opacity-100
            ${theme === "dark" ? "bg-black" : "bg-white"}`}
          onClick={toggleMobileMenu}
        />
      )}

      <nav
        className={`fixed top-5 left-5 bottom-10 h-[96vh] z-40 transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-[110%] lg:translate-x-0"}
          ${theme === "dark" ? "bg-black" : "bg-white"}
          w-64 shadow-lg rounded-[2em] flex flex-col justify-between`}
      >
        <div>
          <div className="p-4 flex items-center gap-2">
            <ChartBarIcon className="h-8 w-8 text-primary" />
            <span
              className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}
            >
              GrowthView
            </span>
          </div>

          <div className="px-3 py-10 space-y-1">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-4 py-4 rounded-lg transition-colors
                    ${
                      isActive
                        ? "bg-primary text-white"
                        : `${theme === "dark" ? "text-white hover:bg-gray-800" : "text-gray-700 hover:bg-gray-100"}`
                    }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="m-3">
          <div className="bg-primary rounded-[1.5em] p-4 text-white text-center">
            <div className="flex justify-center mb-2">
              <CubeIcon className="h-10 w-10" />
            </div>
            <p className="text-center text-md mb-3">
              New update available
              <br />
              click to update
            </p>
            <button className="w-[80%] bg-white text-primary rounded-[2em] py-2 text-sm font-medium">
              Update
            </button>
          </div>

          <button
            onClick={handleOpenModal}
            className={`md:mt-10 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg
              ${theme === "dark" ? "text-red-400 hover:bg-gray-800" : "text-red-600 hover:bg-gray-100"}`}
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
            <span>Log Out</span>
          </button>
        </div>
      </nav>
      <ConfirmationModal
        isOpen={isOpen}
        onConfirm={handleConfirmAction}
        onCancel={closeModal}
        modalProps={modalProps}
      />
    </>
  );
};
