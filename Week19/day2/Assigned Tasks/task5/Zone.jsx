import Area from "./Area";
function Zone({ cityData }) {
  return (
    <div>
      <h2>Zone Information</h2>
      <p>Zone: {cityData.zone}</p>
      <Area cityData={cityData} />
    </div>
  );
}
export default Zone;