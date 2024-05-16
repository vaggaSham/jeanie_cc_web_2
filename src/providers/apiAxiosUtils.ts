import axios from "axios";

const baseUrl = ` https://clinical-profile-6emkfxvrka-uc.a.run.app/`; // add base url here

export const GET = "get";
export const POST = "post";
export const DELETE = "delete";
export const PUT = "put";
// Instance for Axios
const axiosInstance = axios.create({});

const getToken = async () => {
  const value = await localStorage.getItem("token");
  return value ? value : null;
};

export const getHeaders = () => {
  return {
    Accept: "application/json",
    "content-Type": "application/json",
    // authorization: `Bearer ${getToken()}`,
  };
};

export const callApi = (
  path: string,
  method: string = "get",
  data: any = {}
) => {
  //   if (getToken() !== null) {
  return new Promise((resolve, reject) => {
    axiosInstance({
      method: method,
      // url: `${baseUrl}${path}`,
      url: `${path}`,
      data: data,
      headers: getHeaders(),
    })
      .then((response) => {
        resolve(response?.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
  //   } else {
  //     return new Promise((resolve, reject) => {
  //       reject("Unauthorized");
  //     });
  //   }
};
