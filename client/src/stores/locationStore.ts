import { create } from "zustand";
import { ILocation } from "../types/ILocation";
import { getAllLocations } from "../services/getAllLocations";

interface LocationState {
  wasLocationsRequested: boolean;
  locations: ILocation[];
  getLocations: () => void;
}

export const useLocations = create<LocationState>((set) => ({
  locations: [],
  wasLocationsRequested: false,
  getLocations: async () => {
    set({ wasLocationsRequested: true });

    try {
      const locationsRes = await getAllLocations();
      set({ locations: locationsRes });
    } catch (err) {
      set({ locations: [] });
    }
  },
}));
