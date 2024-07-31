// src/components/Post.jsx
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
