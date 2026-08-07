import { useEffect, useState } from "react";
import axios from "axios";

function ReactAPI() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch GET
  useEffect(() => {fetchUsers()}, []);
  //Fetch GET
  async function fetchUsers() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError("Failed to fetch users");
      console.log(err)
    }
    setLoading(false);
  }

  //Axios GET
  async function fetchPosts() {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPosts(response.data.slice(0, 5));
    } catch (err) {
      setError("Failed to fetch posts");
      console.log(err)
    }

    setLoading(false);
  }

  //Fetch POST
  async function createPostFetch() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: "React",
            body: "Learning Fetch API",
          }),
        }
      );

      const data = await response.json();

      setMessage("Fetch Created Post ID: " + data.id);
    } catch (err) {
      setMessage("Fetch POST Failed");
      console.log(err)
    }
  }

  //Axios POST
  async function createPostAxios() {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: "Axios",
          body: "Learning Axios",
        }
      );

      setMessage("Axios Created Post ID: " + response.data.id);
    } catch (err) {
      setMessage("Axios POST Failed");
      console.log(err)
    }
  }

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h1>React API Example</h1>

      <button onClick={fetchUsers}>Fetch Users (Fetch API)</button>
      <button onClick={fetchPosts}>Fetch Posts (Axios)</button>
      <button onClick={createPostFetch}>Create Post (Fetch)</button>
      <button onClick={createPostAxios}>Create Post (Axios)</button>

      <h2>{message}</h2>
      <hr />
      <h2>Users (Fetch)</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
      <hr />

      <h2>Posts (Axios)</h2>
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
export default ReactAPI;