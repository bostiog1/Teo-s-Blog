import { useEffect } from "react";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import PostList from "./PostList";
import { fetchPosts } from "../redux/postSlice";

const Blog = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Blog</h1>
        <Button text="Create Post" to="/form" />
      </div>
      <PostList posts={posts} />
    </div>
  );
};

export default Blog;

// Context API option
/*
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

*/
