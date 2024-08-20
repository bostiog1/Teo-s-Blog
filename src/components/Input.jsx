import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../redux/postSlice";

const Input = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", query); // Check what query is being passed
    dispatch(fetchPosts(query)); // Trigger search with query
  };
  

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Search posts..."
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded ml-2">
        Search
      </button>
    </form>
  );
};

export default Input;
