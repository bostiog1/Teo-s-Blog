// src/context/PostProvider.js
import React, { useState } from 'react';
import axios from 'axios';
import { PostContext } from './PostContext';

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const updatePost = async (id, updatedPost) => {
    try {
      const response = await axios.put(`http://localhost:3000/posts/${id}`, updatedPost);
      setPosts((prevPosts) =>
        prevPosts.map((post) => (post.id === id ? response.data : post))
      );
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <PostContext.Provider value={{ posts, fetchPosts, deletePost, updatePost }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
