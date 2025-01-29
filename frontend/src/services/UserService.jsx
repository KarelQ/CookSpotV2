import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api';


export  const login = (user) => axios.post(REST_API_BASE_URL + "/login", user);

export  const getSessionUser = (user_id) => axios.get(REST_API_BASE_URL + "/sessionuser", user_id);

export  const logout = () => axios.get(REST_API_BASE_URL + "/logout");

export  const getUserDetails = () => axios.get(REST_API_BASE_URL + "/user");

export  const addUserDetails = (user_detail) => axios.post(REST_API_BASE_URL + "/userdetails", user_detail);

export  const register = (user) => axios.post(REST_API_BASE_URL + "/register", user);




