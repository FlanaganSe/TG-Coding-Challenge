import axios, { AxiosInstance } from "axios";
import { axiosConfig } from "../utils/axiosConfig";

const api: AxiosInstance = axios.create(axiosConfig);

export const getAllLocations = async () => {
  try {
    const { data } = await api.get("/locations");
    if (data.status === "success") {
      return data.response;
    } else {
      throw new Error(`Error fetching locations with status ${data.status}`);
    }
  } catch (err: unknown) {
    throw new Error(err as string);
  }
};
