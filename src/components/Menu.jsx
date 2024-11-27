import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaCompass, FaUser } from "react-icons/fa";

const Menu = () => (
  <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-600 z-10">
    <div className="max-w-md mx-auto flex justify-around">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive
            ? "p-4 font-bold text-blue-900"
            : "p-4 font-bold text-gray-500"
        }
        exact
      >
        <FaHome className="h-6 w-6 mx-auto" />
        <span className="text-xs">Home</span>
      </NavLink>
      <NavLink
        to="/discover"
        className={({ isActive }) =>
          isActive
            ? "p-4 font-bold text-blue-900"
            : "p-4 font-bold text-gray-500"
        }
      >
        <FaCompass className="h-6 w-6 mx-auto" />
        <span className="text-xs">Discover</span>
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive
            ? "p-4 font-bold text-blue-900"
            : "p-4 font-bold text-gray-500"
        }
      >
        <FaUser className="h-6 w-6 mx-auto" />
        <span className="text-xs">Profile</span>
      </NavLink>
    </div>
  </nav>
);

export default Menu;
