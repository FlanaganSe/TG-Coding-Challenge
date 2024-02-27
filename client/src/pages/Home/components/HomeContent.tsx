import { useLocations } from "../../../stores/locationStore";

export const HomeContent = () => {
  const { name, details, img, features } = useLocations().selectedLocation;
  if (!location) return <h1>Loading...</h1>;
  return (
    <div>
      <h2>{img}</h2>
      <h2>{name}</h2>
      <h2>{details}</h2>
      <h2>{features.amenities}</h2>
      <img src={img} alt={details} />
    </div>
  );
};
