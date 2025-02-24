import { useState, useRef, useEffect } from "react";
import { useTheme } from "@src/hooks/useTheme";
import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
  SunIcon,
  MoonIcon,
  BellIcon,
  ChevronDownIcon,
  Bars3Icon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import { useAuth, useModal } from "@src/hooks";
import { assets } from "@assets/index";
import { LanguageSelector } from "@src/components/LanguageSelector";
import { useNavigate } from "react-router-dom";
import { ConfirmationModal } from "@src/components/ConfirmModal";

export const TopNavbar = ({
  toggleMobileMenu,
  isMobileMenuOpen,
}: {
  toggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}) => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const { isOpen, openModal, closeModal, modalProps } = useModal();
  const { userData, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleConfirmAction = () => {
    logout();
    navigate("/login");
  };

  const handleOpenModal = () => {
    openModal({
      title: "Confirm Deletion",
      message: "Are you sure you want to Logout ?",
      confirmText: "Logout",
      cancelText: "Cancel",
    });
  };

  return (
    <nav
      className={`${theme === "dark" ? "bg-black" : "bg-white"} shadow-sm px-4 py-2 lg:ml-10 mt-5 mx-3 rounded-2xl`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={toggleMobileMenu}
          className={`lg:hidden top-6 left-2 p-2 rounded-lg bg-primary text-white 
    ${isMobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} 
    transition-all duration-1000 ease-in-out`}
        >
          {!isMobileMenuOpen && <Bars3Icon className="h-5 w-5" />}
        </button>
        <div
          className={`
          lg:static lg:w-2/4 w-3/4
        `}
        >
          <div className="relative flex items-center">
            <div className="lg:block w-50 hidden float-start">
              <span className="text-md block font-bold">
                Hello {userData?.username || "User"}
              </span>
              <span className="text-sm">Welcome Back!</span>
            </div>
            <div
              className={`
              relative flex items-center w-full ml-6 mr-2
            `}
            >
              <MagnifyingGlassIcon className="absolute left-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search here..."
                className={`
                  w-full pl-10 pr-12 py-2 rounded-xl outline-none border-primary border
                  ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}
                `}
              />
              <MicrophoneIcon className="absolute right-3 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 lg:w-2/4 md:w-1/4 justify-end">
          <button className="relative p-2 bg-[#EBEEFC] rounded-lg hidden lg:block">
            <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-[#43A9FB]" />
          </button>

          <button className="relative p-2 bg-[#EBF5EC] rounded-lg hidden lg:block">
            <BellIcon className="h-6 w-6 text-primary" />
            <span className="absolute top-[10px] right-[10px] h-2 w-2 bg-red-500 rounded-full" />
          </button>

          <div className="lg:flex items-center gap-2">
            <LanguageSelector />
          </div>
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img
                src={assets.images.profileImage}
                alt={userData?.email}
                className="h-8 w-8 rounded-full object-cover"
              />
              <ChevronDownIcon className="h-4 w-4" />
            </button>

            {isDropdownOpen && (
              <div
                className={`absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-50 p-2`}
              >
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                >
                  {theme === "dark" ? (
                    <SunIcon className="h-5 w-5 text-yellow-500" />
                  ) : (
                    <MoonIcon className="h-5 w-5 text-gray-700" />
                  )}
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </button>
                <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  <BellIcon className="h-5 w-5 text-primary" />
                  Notifications
                </button>
                <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-[#43A9FB]" />
                  Chat
                </button>
                <button
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                  onClick={handleOpenModal}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <ConfirmationModal
        isOpen={isOpen}
        onConfirm={handleConfirmAction}
        onCancel={closeModal}
        modalProps={modalProps}
      />
    </nav>
  );
};
