import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();
  const { name, age, role } = location.state;
  return (
    <>
      <h2>Profile Page</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </>
  );
}
export default Profile;