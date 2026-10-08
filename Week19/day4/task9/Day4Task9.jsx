import { useState } from "react";
 
function Day4Task9() {
  const [user, setUser] = useState({
    name: "",
    email: ""
  });
 
  const [status, setStatus] =
    useState("");
 
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
 
  const saveProfile = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          method: "PATCH",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify(user)
        }
      );
 
      const data = await response.json();
 
      setStatus(
        `${data.name} Profile Updated`
      );
    } catch {
      setStatus("Profile Update Failed");
    }
  };
 
  return (
    <div>
      <h1>User Profile Settings</h1>
 
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
      />
 
      <br></br>
      <br></br>
 
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
      />
 
      <br></br>
      <br></br>
 
      <button onClick={saveProfile}>Save Changes</button>
 
      <h3>{status}</h3>
    </div>
  );
}
 
export default Day4Task9;