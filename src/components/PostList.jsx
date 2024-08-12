// src/components/PostList.jsx
import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";
import Post from "./Post";

const PostList = () => {
  const { posts } = useContext(PostContext);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
