import axios, { AxiosInstance } from "axios";
import { axiosConfig } from "../utils/axiosConfig";
import { ILocation } from "../types/ILocation";

const api: AxiosInstance = axios.create(axiosConfig);

/*
  GET /locations
  Params: 
  Response: ILocation[] | Error 

  Currently no error typing as it's dependent on server side implementation.
*/
export const getAllLocations = async () => {
  try {
    const { data } = await api.get("/locations");
    if (data.status === "success") {
      return data.response as ILocation[];
    } else {
      throw new Error(`Error fetching locations with status ${data.status}`);
    }
  } catch (err: unknown) {
    throw new Error(err as string);
  }
};
