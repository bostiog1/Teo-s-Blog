import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunks for fetching, deleting, creating, and updating posts
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get("http://localhost:3000/posts");
  return response.data;
});

export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  await axios.delete(`http://localhost:3000/posts/${id}`);
  return id;
});

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async ({ id, updatedPost }) => {
    const response = await axios.put(
      `http://localhost:3000/posts/${id}`,
      updatedPost
    );
    return response.data;
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (newPost) => {
    const response = await axios.post("http://localhost:3000/posts", newPost);
    return response.data;
  }
);

// Create posts slice
/*
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
        console.log("Updated posts state:", state.posts); // Check if posts are updated
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const index = state.posts.findIndex(
          (post) => post.id === action.payload.id
        );
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
      });
  },
});
*/

// Create posts slice
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    filteredPosts: [], // Add this for filtered posts
    status: "idle",
    error: null,
  },
  reducers: {
    // Add searchPosts reducer to filter posts
    searchPosts: (state, action) => {
      const query = action.payload.toLowerCase();
      state.filteredPosts = state.posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
        state.filteredPosts = action.payload; // Initialize filteredPosts with all posts
        console.log("Updated posts state:", state.posts);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
        state.filteredPosts = state.filteredPosts.filter(
          (post) => post.id !== action.payload
        ); // Remove from filteredPosts as well
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
        state.filteredPosts.push(action.payload); // Add new post to filteredPosts
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const index = state.posts.findIndex(
          (post) => post.id === action.payload.id
        );
        if (index !== -1) {
          state.posts[index] = action.payload;
          state.filteredPosts[index] = action.payload; // Update in filteredPosts as well
        }
      });
  },
});

export const { searchPosts } = postsSlice.actions; // Export searchPosts action
export default postsSlice.reducer;
