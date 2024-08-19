import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/postSlice"; // We'll fetch all posts

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);

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
      <Link
        to="/"
        className="text-yellow-500 hover:text-yellow-600 hover:underline font-semibold transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg"
      >
        Home
      </Link>
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
