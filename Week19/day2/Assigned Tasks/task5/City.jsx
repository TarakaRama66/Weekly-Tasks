import Zone from "./Zone";

function City({ cityData }) {
  return (
    <div>
      <h2>City Dashboard</h2> 
      <p>City: {cityData.city}</p>
      <Zone cityData={cityData} />
    </div>
  );
} 
export default City;