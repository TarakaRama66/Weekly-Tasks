import { useContext } from "react";
import CityContext from "./CityContext";

function Weather() {
  const { city } = useContext(CityContext);

  return (
    <div>
      <h2>Weather Information</h2>
      <p>Showing weather for: {city}</p>
    </div>
  );
}

export default Weather;