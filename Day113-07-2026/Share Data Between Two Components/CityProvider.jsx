import { useState } from "react";
import CityContext from "./CityContext";

function CityProvider({ children }) {
  const [city, setCity] = useState("Hyderabad");

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
}

export default CityProvider;