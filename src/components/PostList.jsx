// PostList.jsx
import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

const PostList = () => {
  const posts = useSelector((state) => state.posts.filteredPosts); // Use filteredPosts

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;

// Context API option
/*
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
*/
