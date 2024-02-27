import { useLocations } from "../../../stores/locationStore";

export const HomeContent = () => {
  const location = useLocations().selectedLocation;
  if (!location) return <h1>Loading...</h1>;
  return (
    <div>
      <h2>{location.details}</h2>
      <h2>{JSON.stringify(location.features)}</h2>
      <h2>{location.img}</h2>
      <img src={location.img} alt={location.details} />
    </div>
  );
};
