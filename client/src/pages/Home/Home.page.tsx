import { useEffect, useState } from "react";
import { ILocation } from "../../types/ILocation";
import { HomeContent } from "./components/HomeContent";

const MOCKED_DATA = [
  {
    img: "https://s3.topgolf.com/uploads/images/venue/usa/waco/tg-venue-usa-waco-teeline-day.jpg?resize.height=900",
    site_id: 5,
    name: "Mt. Laurel",
    venue_type: "std",
    timezone: "America/New_York",
    details:
      "Welcome to Topgolf Mount Laurel, the premier entertainment destination in Mount Laurel, NJ. Enjoy our climate-controlled hitting bays for year-round comfort with HDTVs in every bay and throughout our sports bar and restaurant. Using our complimentary clubs or your own, take aim at the giant outfield targets and our high-tech balls will score themselves.",
    features: {
      floors: 3,
      amenities: ["free_wifi", "event_spaces"],
      virtual_tour_link: "https://tour.topgolf.com/v2/45/",
    },
  },
  {
    img: "https://s3.topgolf.com/uploads/images/venue/usa/waco/tg-venue-usa-waco-teeline-day.jpg?resize.height=900",
    site_id: 7,
    name: "Allen",
    venue_type: "std",
    timezone: "America/Chicago",
    details:
      "Welcome to Topgolf DFW - Allen, the premier entertainment destination in Allen, TX. Enjoy our climate-controlled hitting bays for year-round comfort with HDTVs in every bay and throughout our sports bar and restaurant. Using our complimentary clubs or your own, take aim at the giant outfield targets and our high-tech balls will score themselves.",
    features: {
      floors: 2,
      amenities: ["free_wifi", "event_spaces", "restaurant"],
      virtual_tour_link: "https://tour.topgolf.com/v2/45/",
    },
  },
] as ILocation[];

export const HomePage = () => {
  const [locations, setLocations] = useState<ILocation[]>();

  useEffect(() => {
    setLocations(MOCKED_DATA);
  }, []);

  return (
    <div className="bg-orange-500 flex-grow">
      <HomeContent location={locations ? locations[0] : undefined} />
    </div>
  );
};
