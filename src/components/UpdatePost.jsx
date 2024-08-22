import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { updatePost } from "../redux/postSlice";

const UpdatePost = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("Post ID from URL:", id);
  
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === parseInt(id))
  );

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    console.log("Fetched post data:", post);
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    } else {
      // Handle case where post is not found or loading state
      setTitle(""); // Or some loading text if you prefer
      setContent("");
    }
  }, [post]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost({ id, updatedPost: { title, content } }))
      .unwrap()
      .then(() => {
        navigate(`/details/${id}`);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <div className="flex justify-center items-center py-12">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">
            Update Post
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-none transition-colors duration-300"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 dark:bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300"
            >
              Update Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePost;
