// Input.jsx
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchPosts } from "../redux/postSlice";

const Input = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (query.length > 0) {
      // Dispatch searchPosts whenever the query changes
      dispatch(searchPosts(query));
    }
  }, [query, dispatch]);

  // If you want to use a button Submit you can use this function from below
  /*
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchPosts(query)); // Dispatch the search action
  };
*/
  return (
    <form className="mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Search posts..."
      />
      {/* <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
      >
        Search
      </button> */}
    </form>
  );
};

export default Input;
