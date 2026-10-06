import SmartBin from "./SmartBin";
function Area({ cityData }) {
  return (
    <div>
      <h3>Area Information</h3>
      <p>Area: {cityData.area}</p>
      <SmartBin bin={cityData.bin} />
    </div>
  );
}
export default Area;