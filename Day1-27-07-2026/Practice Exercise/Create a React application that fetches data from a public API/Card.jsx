function Card({ employee }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        marginBottom: "15px",
        borderRadius: "8px",
      }}>
        <h2>{employee.name}</h2>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Phone:</strong> {employee.phone}</p>
        <p><strong>Company:</strong> {employee.company.name}</p>
        <p><strong>City:</strong> {employee.address.city}</p>
    </div>
  );
}
export default Card;