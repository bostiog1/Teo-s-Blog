const STORAGE_KEY = "posts";

// Helper function to load posts from localStorage
export const loadPostsFromLocalStorage = () => {
  const posts = localStorage.getItem(STORAGE_KEY);
  return posts ? JSON.parse(posts) : [];
};

// Helper function to save posts to localStorage
export const savePostsToLocalStorage = (posts) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
};

// Helper function to generate unique IDs (if needed)
export const generateId = () => '_' + Math.random().toString(36).substr(2, 9);
