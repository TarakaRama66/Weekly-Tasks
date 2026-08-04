import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const openProfile = () => {
    navigate("/profile", {
      state: {
        name: "Gupta",
        age: 23,
        role: "Frontend Developer",
      },
    });
  };
  return (
    <>
      <h2>Home Page</h2>
      <button onClick={openProfile}>Go to Profile</button>
    </>
  );
}
export default Home;