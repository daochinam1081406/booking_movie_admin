import axios from "axios";

const accessKey = localStorage.getItem("accessToken");

const axiosClient = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NSIsIkhldEhhblN0cmluZyI6IjI0LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNjUwODgwMDAwMCIsIm5iZiI6MTY4Nzg4NTIwMCwiZXhwIjoxNzE2NjU2NDAwfQ.HsoestvkIN5Kub3jnAr8UddrPugJcxCsAm4QfMi4ZbU",
  },
});

axiosClient.interceptors.response.use(
  (response) => {
    return response.data.content;
  },
  (error) => {
    return error.response.data.content;
  }
);

axiosClient.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${accessKey}`;
  }
  return config;
});

export default axiosClient;
