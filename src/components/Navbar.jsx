import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "../services/DarkMode";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center pr-8 p-4 bg-blue-500 dark:bg-gray-800 text-white">
      <Link to="/" className="text-3xl font-bold hover:text-gray-200">
        Teo's Blog
      </Link>
      <nav className="flex space-x-6">
        <Link to="/" className="hover:text-gray-200">
          Home
        </Link>
        <Link to="/form" className="hover:text-gray-200">
          Create Post
        </Link>
        <DarkModeToggle />
      </nav>
    </header>
  );
};

export default Navbar;
