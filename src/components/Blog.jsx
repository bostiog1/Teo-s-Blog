import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      {posts.map(post => (
        <div key={post.id} className="mb-4 p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p>{post.content}</p>
          <Link to={`/details/${post.id}`} className="text-blue-500">Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
