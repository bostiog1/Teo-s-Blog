import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Blog from "./Blog";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <div className="p-4">
        <Blog />
      </div>
    </div>
  );
};

export default Home;
