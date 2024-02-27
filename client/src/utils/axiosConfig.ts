import { AxiosRequestConfig } from "axios";

// Could be fetched from the environment and set to an environment-dependent URL
const BASE_URL = "http://localhost:3000/api";

// An axios config when instantiating an axios instance.
// Could also be injected with middleware
export const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};
