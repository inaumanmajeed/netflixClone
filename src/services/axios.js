import axios from "axios";

const networkService = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const imageBaseUrl = process.env.REACT_APP_API_IMG_URL;

export default networkService;
