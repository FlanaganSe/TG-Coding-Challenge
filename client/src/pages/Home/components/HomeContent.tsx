import { useLocations } from "../../../stores/locationStore";

export const HomeContent = () => {
  const { name, details, img, features } = useLocations().selectedLocation;

  if (!name) return <h1>No selected location...</h1>;

  const { amenities, virtual_tour_link, floors } = features;

  return (
    <div>
      <img src={img} alt={details} />
      <h1 className="text-3xl py-4">{name}</h1>
      <div className="flex flex-row pt-6">
        <div className="flex-1">
          <h2>{details}</h2>
        </div>
        <div className="flex-1">
          <p>Features:</p>
          {/* The features object could changed to a list with Object.entries()
          and mapped over to generate the list items but it's typically best to
           avoid changingdata structures in the client */}
          <ul>
            {amenities && (
              <li>Amenities: {amenities.join(", ").replaceAll("_", " ")}</li>
            )}
            {virtual_tour_link && (
              <li>
                Virtual Tour:{" "}
                <a className="text-blue-500" href={virtual_tour_link}>
                  Link!
                </a>
              </li>
            )}
            {floors && <li>Number of floors: {floors}</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};
