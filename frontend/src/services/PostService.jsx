import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/posts';

export const postList = () => axios.get(REST_API_BASE_URL);

export const postDetailsById = (post_id) => axios.get(REST_API_BASE_URL + '/' + post_id);


export  const createPost = (post) => axios.post(REST_API_BASE_URL+'/addpost', post);