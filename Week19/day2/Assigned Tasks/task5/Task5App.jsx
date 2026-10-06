import City from "./City";

function Task5App() {
  const cityData = {
    city: "Hyderabad",
    zone: "North Zone",
    area: "Kukatpally",
    bin: {
      id: "BIN-101",
      wasteLevel: 82,
      status: "Needs Collection",
    },
  };
  return (
    <div>
      <h1>Smart Waste Management System</h1>
      <City cityData={cityData} />
    </div>
  );
}
export default Task5App;