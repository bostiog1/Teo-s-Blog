// // src/services/api.js
// import axios from 'axios';

// const API_URL = 'http://localhost:3000/posts';

// export const fetchPosts = async () => {
//   const response = await axios.get(API_URL);
//   return response.data;
// };

// export const createPost = async (post) => {
//   const response = await axios.post(API_URL, post);
//   return response.data;
// };

// export const deletePost = async (id) => {
//   await axios.delete(`${API_URL}/${id}`);
// };

// export const updatePost = async (id, post) => {
//   const response = await axios.put(`${API_URL}/${id}`, post);
//   return response.data;
// };
