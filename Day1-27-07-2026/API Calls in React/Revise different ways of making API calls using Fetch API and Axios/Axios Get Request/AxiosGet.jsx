import axios from "axios";
import { useEffect, useState } from "react";

function AxiosGet() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts.slice(0, 5).map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  );
}
export default AxiosGet;