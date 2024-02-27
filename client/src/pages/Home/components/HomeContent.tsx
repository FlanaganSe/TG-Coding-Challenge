import { useLocations } from "../../../stores/locationStore";

export const HomeContent = () => {
  const location = useLocations().locations;
  if (!location[0]) return <h1>Loading...</h1>;
  return (
    <div>
      <h2>{location[0].details}</h2>
      <h2>{JSON.stringify(location[0].features)}</h2>
      <h2>{location[0].img}</h2>
      <img src={location[0].img} alt={location[0].details} />
    </div>
  );
};
