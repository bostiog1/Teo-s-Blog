import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/postSlice";
import Input from "./Input";
import PostList from "./PostList";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
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
    <div>
      <Navbar /> {/* Add Navbar here */}
      <div className="p-4">
        <Input />
        <PostList posts={posts} />
      </div>
    </div>
    // <div className="p-4">
    //   <header className="flex justify-between items-center mb-4">
    //     <h1 className="text-2xl font-bold">Teo's Blog</h1>
    //     <nav className="flex space-x-4">
    //       <Link to="/" className="text-blue-500 hover:underline">Home</Link>
    //       <Link to="/form" className="text-blue-500 hover:underline">Create Post</Link>
    //     </nav>
    //   </header>
    //   <Input />
    //   <PostList posts={posts} />
    // </div>
  );
};

export default Home;
