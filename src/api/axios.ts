import Axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

// import { API_URL } from "../config";
// import store from "../lib/createStore";
// import { GlobalState } from "../definitions/GlobalState";

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}
function authRequestInterceptor(config: AdaptAxiosRequestConfig) {
  // const state: GlobalState = store.getState();
  // const token = state?.application?.auth?.jwt;
  // if (token) {
  //   config.headers!.authorization = `Bearer ${token}`;
  // }

  if (config.url && config.url.includes("authentication/referrer/validate")) {
    const referrer_token = localStorage.getItem('referrer_token')
    config.headers['X-Referrer-Token'] = referrer_token;
  }
  
  const token = localStorage.getItem('jwt_token')
  config.headers['X-Api-Key'] = "";
  config.headers['X-Auth-Token'] = token;
  config.headers.Accept = "application/json";
  return config;
}

const axios = Axios.create({
  baseURL: "https://www.test.com",
});



axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    // useNotificationStore.getState().addNotification({
    //   type: 'error',
    //   title: 'Error',
    //   message,
    // });
    return Promise.reject(error);
  }
);

export { axios };
