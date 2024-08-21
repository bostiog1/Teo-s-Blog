import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/postSlice"; // We'll fetch all posts
import { deletePost } from "../redux/postSlice"; // Delete action from Redux
import { useNavigate } from "react-router-dom"; // Import useNavigate

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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
      <p className="text-gray-500 mt-4">Likes: {post.likes}</p>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-4 py-2 rounded ml-4 hover:bg-red-600 transition-colors duration-300"
      >
        Delete
      </button>
      
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
