import { create } from "zustand";
import { ILocation } from "../types/ILocation";
import { getAllLocations } from "../services/getAllLocations";

interface LocationState {
  locations: ILocation[];
  selectedLocation: ILocation;
  getLocations: () => void;
  setSelectedLocation: (selectedLocationName: string) => void;
}

export const useLocations = create<LocationState>((set) => ({
  locations: [],
  selectedLocation: {} as ILocation,
  getLocations: async () => {
    try {
      const locationsRes = await getAllLocations();
      set({ locations: locationsRes });
      set({ selectedLocation: locationsRes[0] });
    } catch (err) {
      set({ locations: [] });
      set({ selectedLocation: {} as ILocation });
    }
  },
  setSelectedLocation: (selectedLocationName: string) => {
    set((state) => ({
      selectedLocation:
        state.locations.find(
          (location) => location.name === selectedLocationName
        ) || ({} as ILocation),
    }));
  },
}));
