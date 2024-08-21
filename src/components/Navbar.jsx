import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center mb-4 p-4 bg-gray-100">
      <h1 className="text-2xl font-bold">Teo's Blog</h1>
      <nav className="flex space-x-4">
        <Link to="/" className="text-blue-500 hover:underline">
          Home
        </Link>
        <Link to="/form" className="text-blue-500 hover:underline">
          Create Post
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
