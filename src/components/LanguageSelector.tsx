import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { COUNTRY_LIST, Country } from "@src/utils/constants";
import { useTheme } from "@src/hooks";

export const LanguageSelector = () => {
  const { theme } = useTheme();
  const [selectedCountry, setSelectedCountry] = useState<Country>(
    COUNTRY_LIST[0],
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative lg:w-40 md:w-10">
      <button
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        className="flex items-center gap-2 p-1 border rounded-lg w-full"
      >
        <span className="text-xl">{selectedCountry.flag}</span>
        <span className="text-sm hidden lg:block">{selectedCountry.name}</span>
        {isDropdownOpen ? (
          <ChevronUpIcon className="h-5 w-5 ml-auto" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 ml-auto" />
        )}
      </button>

      {isDropdownOpen && (
        <div
          className={`absolute z-10 shadow-md rounded-lg mt-2 w-full max-h-60 overflow-y-auto ${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
        >
          <ul>
            {COUNTRY_LIST.map((country) => (
              <li
                key={country.name}
                className="cursor-pointer px-4 py-2 dark:hover:bg-gray-700 dark:hover:text-white hover:bg-gray-200"
                onClick={() => handleCountrySelect(country)}
              >
                <span className="text-xl mr-1">{country.flag}</span>
                <span className="text-sm lg:inline-block hidden">
                  {country.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
