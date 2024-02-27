import { useEffect, useState } from "react";
import { ILocation } from "../../types/ILocation";
import { HomeContent } from "./components/HomeContent";
import { getAllLocations } from "../../services/getAllLocations";

export const HomePage = () => {
  const [locations, setLocations] = useState<ILocation[]>();

  useEffect(() => {
    (async () => {
      try {
        const locationsRes = await getAllLocations();
        setLocations((locationsRes || undefined) as ILocation[]);
      } catch (err) {
        console.log("Error fetching locations");
        // Probably should send a toast notification here...
      }
    })();
  }, []);

  return (
    <div className="bg-orange-500 flex-grow">
      <HomeContent location={locations ? locations[0] : undefined} />
    </div>
  );
};
