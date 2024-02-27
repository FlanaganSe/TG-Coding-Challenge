import { create } from "zustand";
import { ILocation } from "../types/ILocation";
import { getAllLocations } from "../services/getAllLocations";

interface LocationState {
  locations: ILocation[];
  selectedLocation: ILocation;
  getLocations: () => void;
  setSelectedLocation: (selectedLocationId: number) => void;
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
  setSelectedLocation: (selectedLocationId: number) => {
    set((state) => ({
      selectedLocation:
        state.locations.find(
          (location) => location.site_id === selectedLocationId
        ) || ({} as ILocation),
    }));
  },
}));
