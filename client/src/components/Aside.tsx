import { useLocations } from "../stores/locationStore";

export const Aside = () => {
  const { setSelectedLocation, locations } = useLocations();

  const handleChangeLocation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const changeLocationId = Number(e.target.value) || 0;

    setSelectedLocation(changeLocationId);
  };

  // If unable to fetch locations show no locations
  if (!Object.keys(locations).length) {
    return <p>No Locations</p>;
  }

  return (
    <select
      name="selectedLocation"
      id="selectedLocation"
      onChange={handleChangeLocation}
      className="mt-6 min-w-16 p-2 rounded-md bg-gray-100 text-green-900"
    >
      {locations.map((location) => (
        <option value={location.site_id} key={location.site_id}>
          {location.name}
        </option>
      ))}
    </select>
  );
};
