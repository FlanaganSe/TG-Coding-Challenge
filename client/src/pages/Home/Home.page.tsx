import { useEffect } from "react";
import { HomeContent } from "./components/HomeContent";
import { useLocations } from "../../stores/locationStore";

export const HomePage = () => {
  const { getLocations } = useLocations();

  useEffect(() => {
    getLocations();
  }, [getLocations]);

  return (
    <div className="bg-orange-500 flex-grow">
      <HomeContent />
    </div>
  );
};
