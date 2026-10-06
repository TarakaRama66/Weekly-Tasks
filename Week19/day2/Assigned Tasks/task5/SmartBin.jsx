function SmartBin({ bin }) {
  const getBinStatus = () => {
    if (bin.wasteLevel >= 80)
      return "Collection Required";
    if (bin.wasteLevel >= 50)
      return "Half Filled";
    return "Available";
  };
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "15px",
        marginTop: "15px",
      }}>
      <h2>Smart Bin Details</h2>
      <p>
        <strong>Bin ID:</strong> {bin.id}
      </p>
      <p>
        <strong>Waste Level:</strong>
        {bin.wasteLevel}%
      </p>
      <p>
        <strong>Status:</strong>
        {bin.status}
      </p>
      <p>
        <strong>System Alert:</strong>
        {getBinStatus()}
      </p>
    </div>
  );
}
export default SmartBin;