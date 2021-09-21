import axios from "axios";
import { getAuthToken } from "../utils/token";

const defaults = {
  //  baseURL: "http://10.10.120.111:8081/api/"
    baseURL: "http://10.10.115.3:8081/api/",
  //  baseURL: "http://10.10.120.105:8081/api/"
  //  baseURL: "http://91.240.15.30:8081/api/",
}

const api = async (method, url, variable) => {
    return await axios({
      method,
      url: `${defaults.baseURL}${url}`,
      data: method !== "get" ? variable : undefined,
      headers: {Authorization: getAuthToken()}
    })
}

export default {
    get: (...args) => api("get", ...args),
    post: (...args) => api("post", ...args),
    delete: (...args) => api("delete", ...args),
    update: (...args) => api("update", ...args),
  }