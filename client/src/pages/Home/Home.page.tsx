import { useEffect } from "react";
import { HomeContent } from "./components/HomeContent";
import { useLocations } from "../../stores/locationStore";

export const HomePage = () => {
  const locationsStore = useLocations();

  useEffect(() => {
    /*
      Note: This only attempts getLocations() a single time.
      No retries are attempted from the client. 
    */
    if (locationsStore.wasLocationsRequested) return;
    locationsStore.getLocations();
  }, [locationsStore]);

  return (
    <div className="bg-orange-500 flex-grow">
      <HomeContent />
    </div>
  );
};
