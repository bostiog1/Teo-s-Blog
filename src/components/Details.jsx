import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/postSlice"; // We'll fetch all posts
import { deletePost } from "../redux/postSlice"; // Delete action from Redux
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "./Navbar";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);

  const handleDelete = () => {
    dispatch(deletePost(post.id)).then(() => {
      navigate("/"); // Redirect to home after successful deletion
    });
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  const post = posts.find((post) => post.id === id);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <div className="p-6 max-w-3xl mx-auto bg-white dark:bg-gray-800 border rounded-lg shadow-lg mt-8">
        <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
        <p className="text-lg leading-relaxed">{post.content}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">Likes: {post.likes}</p>
        <div className="mt-8 flex space-x-4">
          <Link
            to={`/`}
            className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition-colors duration-300"
          >
            Go Back
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors duration-300"
          >
            Delete
          </button>
          <Link
            to={`/update/${post.id}`}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;

// Context API option
/*
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
      <p className="text-gray-500 mt-4">Likes: {post.likes}</p>
    </div>
  );
};

export default Details;
*/
