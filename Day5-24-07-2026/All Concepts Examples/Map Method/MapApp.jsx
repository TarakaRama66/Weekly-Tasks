function MapApp() {
  const fruits = ["Apple","Banana","Orange","Mango"];
  return (
    <div>
        <h1>Map Method</h1>
        <h1>Fruit List</h1>
        {fruits.map((fruit, index) => (
            <h2 key={index}>
                {fruit}
            </h2>
        ))}
    </div>
  );
}
export default MapApp;