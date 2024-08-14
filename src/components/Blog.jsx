import { useContext, useEffect } from "react";
import { PostContext } from "../context/PostContext";
import PostList from "./PostList";
import Button from "./Button";

const Blog = () => {
  const { fetchPosts } = useContext(PostContext);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Blog</h1>
        <Button text="Create Post" to="/form" />
      </div>
      <PostList />
    </div>
  );
};

export default Blog;
