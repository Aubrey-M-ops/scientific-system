import axios from "axios";
const service = axios.create({
  baseURL: "http://silk-web.dms.heyfuture.com.cn/", // url = base url + request url
  timeout: 60000, // request timeout
  withCredentials: true, // send cookies when cross-domain requests
  crossDomain: true,
});
// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    if (config.method === "post") {
      config.data = {
        ...config.data,
        _t: Date.parse(new Date()) / 1000, // 时间戳
      };
    } else if (config.method === "get") {
      config.params = {
        _t: Date.parse(new Date()) / 1000, // 时间戳
        ...config.params,
      };
    }
    return config;
  },
  (error) => {
    // do something with request error
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data;
    // if the custom code is not 20000, it is judged as an error.
    if (res.code === 4406) {
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
