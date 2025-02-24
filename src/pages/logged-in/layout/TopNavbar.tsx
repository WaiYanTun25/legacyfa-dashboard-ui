import { useState } from "react";
import { useTheme } from "@src/hooks/useTheme";
import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
  SunIcon,
  MoonIcon,
  BellIcon,
  ChevronDownIcon,
  XMarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "@src/hooks";
import { assets } from "@assets/index";
import { LanguageSelector } from "@src/components/LanguageSelector";

export const TopNavbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { userData } = useAuth();

  return (
    <nav
      className={`${theme === "dark" ? "bg-black" : "bg-white"} shadow-sm px-4 py-2 ml-16 lg:ml-10 mt-5 mr-3 rounded-2xl`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div
          className={`
          ${isSearchOpen ? "absolute inset-x-0 top-0 bg-inherit p-4" : "relative"} 
          lg:static lg:w-2/4 w-3/4
        `}
        >
          <div className="relative flex items-center">
            <div className="lg:block w-50 hidden float-start">
              <span className="text-md block font-bold">Hello Gokul</span>
              <span className="text-sm">Welcome Back!</span>
            </div>
            {isSearchOpen && (
              <button
                className="lg:hidden absolute -left-2 top-1/2 -translate-y-1/2"
                onClick={() => setIsSearchOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            )}
            <div
              className={`
              relative flex items-center w-full
              ${isSearchOpen ? "ml-6" : "hidden lg:flex"}
            `}
            >
              <MagnifyingGlassIcon className="absolute left-3 h-5 w-5 text-gray-400" />
              {}
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
          {!isSearchOpen && (
            <button className="lg:hidden" onClick={() => setIsSearchOpen(true)}>
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
          )}

          <button onClick={toggleTheme} className="hidden lg:block">
            {theme === "dark" ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle theme</span>
          </button>

          <button className="relative p-2 bg-[#EBEEFC] rounded-lg">
            <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-[#43A9FB]" />
          </button>
          <button className="relative p-2 bg-[#EBF5EC] rounded-lg">
            <BellIcon className="h-6 w-6 text-primary" />
            <span className="absolute top-[10px] right-[10px] h-2 w-2 bg-red-500 rounded-full" />
          </button>

          <div className="lg:flex items-center gap-2">
            <LanguageSelector />
          </div>

          <button className="flex items-center gap-2">
            <img
              src={assets.images.profileImage}
              alt={userData?.email}
              className="h-8 w-8 rounded-full object-cover"
            />
            <ChevronDownIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      {}
    </nav>
  );
};
