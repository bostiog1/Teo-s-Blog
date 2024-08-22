import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/postSlice"; // We will add this action later
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "./Navbar";

const Form = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    const likes = Math.floor(Math.random() * 51);
    const newPost = { title, content, likes };

    dispatch(createPost(newPost)).then(() => {
      navigate("/"); // Redirect to home after successful creation
    });

    setTitle("");
    setContent("");
  };

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Create a Post</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

// Context API option
/*
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Form = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const likes = Math.floor(Math.random() * 51);
    try {
      const response = await axios.post('http://localhost:3000/posts', { title, content, likes });
      console.log('Post created:', response.data);
      setTitle('');
      setContent('');
      console.log('title: ', title);
      console.log('content: ', content);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create a Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
      <Link to='/' className='text-yellow-500'>Home</Link>
    </div>
  );
};

export default Form;
*/
