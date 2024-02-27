import { useLocations } from "../stores/locationStore";

export const Aside = () => {
  const locationsStore = useLocations();

  if (!locationsStore?.selectedLocation?.name) {
    return;
  }

  return (
    <aside className="bg-red-500 min-w-40">
      <select
        name="selectedLocation"
        id="selectedLocation"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          locationsStore.setSelectedLocation(e.target.value || "")
        }
      >
        {locationsStore.locations.map((location) => (
          <option value={location.name} key={location.name}>
            {location.name}
          </option>
        ))}
      </select>
    </aside>
  );
};
