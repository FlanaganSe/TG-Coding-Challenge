import { useEffect } from "react";
import { HomeContent } from "./components/HomeContent";
import { useLocations } from "../../stores/locationStore";

export const HomePage = () => {
  const { getLocations } = useLocations();

  // Make a request for all locations. No re-tries are attempted from the client.
  useEffect(() => {
    getLocations();
  }, [getLocations]);

  return <HomeContent />;
};
