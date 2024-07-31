import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "./Button";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-4">
      <div>
        <h1 className="text-2xl font-bold mb-4">Blog</h1>
        <Button />
      </div>
      {posts.map((post) => (
        <div key={post.id} className="mb-4 p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p>{post.content.substring(0, 150)}...</p>
          <p className="text-gray-500">Likes: {post.likes}</p>
          <Link to={`/details/${post.id}`} className="text-blue-500">
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
