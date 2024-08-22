import React from "react";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div
      className="mb-4 p-4 border rounded shadow bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
      hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={() => navigate(`/details/${post.id}`)}
    >
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="text-gray-500 dark:text-gray-400">Likes: {post.likes}</p>
      <p>{post.content.substring(0, 150)}...</p>
    </div>
  );

};

export default Post;

// Context API option
/*
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from '../context/PostContext';

const Post = ({ post }) => {
  const { deletePost } = useContext(PostContext);

  return (
    <div className="mb-4 p-4 border rounded shadow">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p>{post.content.substring(0, 150)}...</p>
      <p className="text-gray-500">Likes: {post.likes}</p>
      <Link to={`/details/${post.id}`} className="text-blue-500">Read More</Link>
      <button
        onClick={() => deletePost(post.id)}
        className="bg-red-500 text-white px-4 py-2 rounded ml-4"
      >
        Delete
      </button>
      <Link to={`/update/${post.id}`} className="text-blue-500 ml-4">Update</Link>
    </div>
  );
};

export default Post;
*/
