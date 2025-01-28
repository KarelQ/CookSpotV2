import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/bookmark';

export const isPostIdBookmarkedByUserId = (post_id, user_id) => axios.get(REST_API_BASE_URL +'/' + post_id +'/'+user_id);

export const newBookmark = (post_id, user_id) => axios.post(REST_API_BASE_URL +'/new/' + post_id +'/'+user_id);

export const deleteBookmark = (post_id, user_id) => axios.post(REST_API_BASE_URL +'/delete/' + post_id +'/'+user_id);

