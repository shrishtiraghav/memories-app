import axios from 'axios';

const url = 'https://firs-node-backend.herokuapp.com/posts';

export const fetchPosts = (page) => axios.get(`${url}?page=${page}`);
export const createPost = ( newPost ) => axios.post(url , newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);