import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: "http://localhost:8081/",
  timeout: 60000,
});

instance.interceptors.request.use(
  (config) => {
    let token = Cookies.get("token");
    if (token) {
      config.headers = config.headers || {};
      config.headers.token = token;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (result) => {
    return result.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
