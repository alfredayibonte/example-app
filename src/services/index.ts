import axios, { RawAxiosRequestHeaders } from "axios";

const BASE_URL = "";
const ax = axios.create({
  baseURL: BASE_URL,
});

ax.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // handles specific error codes here.
    return Promise.reject(error);
  }
);

interface Request {
  url: string;
  method: string;
  data: any;
  headers: Partial<RawAxiosRequestHeaders>;
}

const ApiCall = (
  { url, method = "GET", data, headers }: Request,
  normalizer: any
) => {
  return ax(url, {
    method,
    data,
    headers,
  })
    .then(({ data: res }) => {
      return normalizer ? normalizer(res) : res;
    })
    .catch((error) => {
      console.log("error:", error);
      return Promise.reject(error);
    });
};

export default ApiCall;
