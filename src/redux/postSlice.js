import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loadPostsFromLocalStorage,
  savePostsToLocalStorage,
  generateId,
} from "../utils/localStorageUtils";

// Async Thunks for fetching, deleting, creating, and updating posts using localStorage
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const posts = loadPostsFromLocalStorage();
  return posts;
});

export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  const posts = loadPostsFromLocalStorage();
  const updatedPosts = posts.filter((post) => post.id !== id);
  savePostsToLocalStorage(updatedPosts);
  return id;
});

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async ({ id, updatedPost }, { getState }) => {
    const posts = loadPostsFromLocalStorage();
    const updatedPosts = posts.map((post) =>
      post.id === id
        ? { ...post, title: updatedPost.title, content: updatedPost.content }
        : post
    );
    savePostsToLocalStorage(updatedPosts);
    return updatedPosts.find((post) => post.id === id);
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (newPost) => {
    const posts = loadPostsFromLocalStorage();
    const postWithId = { ...newPost, id: generateId() }; // Add unique ID to new post
    const updatedPosts = [...posts, postWithId];
    savePostsToLocalStorage(updatedPosts);
    return postWithId;
  }
);

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
    searchPosts: (state, action) => {
      const query = action.payload.toLowerCase();
      state.filteredPosts = state.posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query)
      );
    },
    reorderPosts: (state, action) => {
      state.posts = action.payload;
      state.filteredPosts = action.payload;
      savePostsToLocalStorage(state.posts); // Save reordered posts to localStorage
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
        state.filteredPosts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
        state.filteredPosts = state.filteredPosts.filter(
          (post) => post.id !== action.payload
        );
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
        state.filteredPosts.push(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const index = state.posts.findIndex(
          (post) => post.id === action.payload.id
        );
        if (index !== -1) {
          state.posts[index] = {
            ...state.posts[index],
            title: action.payload.title,
            content: action.payload.content,
          };
          const filteredIndex = state.filteredPosts.findIndex(
            (post) => post.id === action.payload.id
          );
          if (filteredIndex !== -1) {
            state.filteredPosts[filteredIndex] = {
              ...state.filteredPosts[filteredIndex],
              title: action.payload.title,
              content: action.payload.content,
            };
          }
        }
      });
  },
});

export const { searchPosts, reorderPosts } = postsSlice.actions;
export default postsSlice.reducer;

// If you want to use a JSON you can use the code bellow
/*

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
  async ({ id, updatedPost }, { getState }) => {
    const currentPost = getState().posts.posts.find((post) => post.id === id);
    const postToUpdate = {
      ...currentPost,
      title: updatedPost.title,
      content: updatedPost.content,
    };
    const response = await axios.put(
      `http://localhost:3000/posts/${id}`,
      postToUpdate
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
    reorderPosts: (state, action) => {
      state.posts = action.payload;
      state.filteredPosts = action.payload; // Update filteredPosts as well
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
          // Update only title and content, preserve other properties
          state.posts[index] = {
            ...state.posts[index],
            title: action.payload.title,
            content: action.payload.content,
          };
          // Do the same for filteredPosts
          const filteredIndex = state.filteredPosts.findIndex(
            (post) => post.id === action.payload.id
          );
          if (filteredIndex !== -1) {
            state.filteredPosts[filteredIndex] = {
              ...state.filteredPosts[filteredIndex],
              title: action.payload.title,
              content: action.payload.content,
            };
          }
        }
      });
  },
});

export const { searchPosts,reorderPosts } = postsSlice.actions; // Export searchPosts action
export default postsSlice.reducer;

*/
