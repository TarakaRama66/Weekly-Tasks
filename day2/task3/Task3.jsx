import { useEffect, useMemo, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function Task3() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [userFilter, setUserFilter] = useState("all");
  const [sortBy, setSortBy] = useState("id-asc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch posts from the API
  useEffect(() => {
    const controller = new AbortController();

    async function fetchPosts() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API_URL}?_limit=20`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts.");
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchPosts();

    return () => controller.abort();
  }, []);

  // Search, filter, and sort posts
  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();

    let result = posts.filter(post => {
      const matchesSearch =
        post.title.toLowerCase().includes(query) ||
        post.body.toLowerCase().includes(query);

      const matchesUser =
        userFilter === "all" ||
        post.userId === Number(userFilter);

      return matchesSearch && matchesUser;
    });

    result = [...result];

    if (sortBy === "title-asc") {
      result.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    } else if (sortBy === "title-desc") {
      result.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    } else if (sortBy === "id-desc") {
      result.sort((a, b) => b.id - a.id);
    } else {
      result.sort((a, b) => a.id - b.id);
    }

    return result;
  }, [posts, search, userFilter, sortBy]);

  function resetControls() {
    setSearch("");
    setUserFilter("all");
    setSortBy("id-asc");
  }

  return (
    <main>
      <h1>React Posts Dashboard</h1>

      <h2>Search Posts</h2>

      <input
        type="text"
        value={search}
        onChange={event => setSearch(event.target.value)}
        placeholder="Search title or content"
      />

      <h2>Filter by User</h2>

      <select
        value={userFilter}
        onChange={event => setUserFilter(event.target.value)}
      >
        <option value="all">All Users</option>
        {Array.from({ length: 10 }, (_, index) => (
          <option key={index + 1} value={index + 1}>
            User {index + 1}
          </option>
        ))}
      </select>

      <h2>Sort Posts</h2>

      <select
        value={sortBy}
        onChange={event => setSortBy(event.target.value)}
      >
        <option value="id-asc">Post ID: Low to High</option>
        <option value="id-desc">Post ID: High to Low</option>
        <option value="title-asc">Title: A to Z</option>
        <option value="title-desc">Title: Z to A</option>
      </select>

      <p>Matching posts: {filteredPosts.length}</p>

      <button type="button" onClick={resetControls}>
        Reset Search and Filters
      </button>

      <hr />

      {loading && <p>Loading posts...</p>}

      {error && <p role="alert">Error: {error}</p>}

      {!loading && !error && filteredPosts.length === 0 && (
        <p>No matching posts found.</p>
      )}

      {!loading && !error && (
        <ul>
          {filteredPosts.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <p>Post ID: {post.id}</p>
              <p>User ID: {post.userId}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Task3;