import { useState } from "react";

export const Aside = () => {
  const [selectedLocation, setSelectedLocation] = useState(0);

  console.log("SelectedLocation", selectedLocation);

  return (
    <aside className="bg-red-500 min-w-40">
      <select
        name="selectedLocation"
        id="selectedLocation"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setSelectedLocation(Number(e.target?.value) || 0)
        }
      >
        <option value={0}>Choose a location</option>
        <option value={1}>Location1</option>
        <option value={2}>Location2</option>
        <option value={3}>Location3</option>
        <option value={4}>Location4</option>
      </select>
    </aside>
  );
};
