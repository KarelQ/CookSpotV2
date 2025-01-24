import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/category';

export const categoryListNames = () => axios.get(REST_API_BASE_URL +'/names');
export const category = () => axios.get(REST_API_BASE_URL );
