import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://gruzja-backend.herokuapp.com",
});
