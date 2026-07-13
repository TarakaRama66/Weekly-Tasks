import { useContext } from "react";
import CityContext from "./CityContext";

function CitySelector() {
  const { city, setCity } = useContext(CityContext);
  return (
    <div>
        <h1>Share data between multiple components using Context API</h1>
        <h2>Select City</h2>
        <select
        value={city}
        onChange={(e) => setCity(e.target.value)}>
        <option>Hyderabad</option>
        <option>Chennai</option>
        <option>Bangalore</option>
        <option>Mumbai</option>
        </select>
    </div>
  );
}
export default CitySelector;