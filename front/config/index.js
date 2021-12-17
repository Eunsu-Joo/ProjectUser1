import axios from "axios";

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const instanceApi = axios.create({
  baseURL: `http://localhost:1337/api/users`,
});

instanceApi.interceptors.response.use(function (res) {
  return res;
});
