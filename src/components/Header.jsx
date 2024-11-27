import React, { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

const FilterDropdown = ({ isOpen, setSelectedFilter, selectedFilter }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-20">
      <ul className="py-2">
        <li>
          <button
            onClick={() => setSelectedFilter("beaches")}
            className={`w-full text-lg text-gray-700 hover:text-indigo-600 focus:outline-none py-2 px-4 transition-all duration-200 ${
              selectedFilter === "beaches" ? "bg-indigo-100" : ""
            }`}
          >
            Beaches
          </button>
        </li>
        <li>
          <button
            onClick={() => setSelectedFilter("falls")}
            className={`w-full text-lg text-gray-700 hover:text-indigo-600 focus:outline-none py-2 px-4 transition-all duration-200 ${
              selectedFilter === "falls" ? "bg-indigo-100" : ""
            }`}
          >
            Falls
          </button>
        </li>
        <li>
          <button
            onClick={() => setSelectedFilter("farm")}
            className={`w-full text-lg text-gray-700 hover:text-indigo-600 focus:outline-none py-2 px-4 transition-all duration-200 ${
              selectedFilter === "farm" ? "bg-indigo-100" : ""
            }`}
          >
            Farm
          </button>
        </li>
        <li>
          <button
            onClick={() => setSelectedFilter("resorts")}
            className={`w-full text-lg text-gray-700 hover:text-indigo-600 focus:outline-none py-2 px-4 transition-all duration-200 ${
              selectedFilter === "resorts" ? "bg-indigo-100" : ""
            }`}
          >
            Resorts
          </button>
        </li>
      </ul>
    </div>
  );
};

const Header = ({ searchText, setSearchText }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-10 shadow-md">
      <div className="max-w-md mx-auto p-2">
        <div className="flex items-center space-x-2">
          <img src="logo.png" alt="TravelApp Logo" className="h-16 w-16" />
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full pl-10 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button
            className="p-2 rounded-full bg-gray-100 shadow hover:bg-gray-200"
            aria-label="Filter"
            onClick={toggleDropdown}
          >
            <FaFilter className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="relative">
          <FilterDropdown
            isOpen={isDropdownOpen}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
