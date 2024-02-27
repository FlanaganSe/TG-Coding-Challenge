import { create } from "zustand";
import { ILocation } from "../types/ILocation";
import { getAllLocations } from "../services/locations";

interface LocationState {
  locations: ILocation[];
  selectedLocation: ILocation;
  getLocations: () => void;
  setSelectedLocation: (selectedLocationId: number) => void;
}

// A zustand store for storing slices of data in memory
export const useLocations = create<LocationState>((set) => ({
  /*
    Slices of data in state
    Could also store errors, loading states, etc..
  */
  locations: [],
  selectedLocation: {} as ILocation,

  // Actions

  // Calls getAllLocations() and stores the response in a slice.
  // Does not currently handle loading / error states
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

  // Method for setting a selected location
  // Finds selectedLocation from locations by site_id
  setSelectedLocation: (selectedLocationId: number) => {
    set((state) => ({
      selectedLocation:
        state.locations.find(
          (location) => location.site_id === selectedLocationId
        ) || ({} as ILocation),
    }));
  },
}));
