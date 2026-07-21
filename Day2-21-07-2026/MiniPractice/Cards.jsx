import { useEffect, useState } from "react";

function Cards() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getUsers();
    getPosts();
  }, []);

  async function getUsers() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = await response.json();
    setUsers(data);
  }

  async function getPosts() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const data = await response.json();
    setPosts(data.slice(0, 5));
  }

  return (
    <div>
      <h1>Users</h1>

      {users.map((user) => (
        <div key={user.id}style={{
            border: "1px solid blue",
            margin: "10px",
            padding: "10px",
          }}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
      <hr />
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}style={{
            border: "1px solid green",
            margin: "10px",
            padding: "10px",
          }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;