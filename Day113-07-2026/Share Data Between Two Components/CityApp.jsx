import CityProvider from "./CityProvider";
import CitySelector from "./CitySelector";
import Weather from "./Weather";

function CityApp() {
  return (
    <CityProvider>
      <CitySelector/>
      <Weather/>
    </CityProvider>
  );
}

export default CityApp;