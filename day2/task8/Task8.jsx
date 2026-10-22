
import React, { useCallback, useEffect, useState } from "react";

// 1. Custom Hook for API data fetching
function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = useCallback(async (signal) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(url, { signal });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message || "Something went wrong.");
        setData([]);
      }
    } finally {
      if (!signal.aborted) {
        setLoading(false);
      }
    }
  }, [url]);

  useEffect(() => {
    const controller = new AbortController();

    fetchData(controller.signal);

    return () => {
      controller.abort();
    };
  }, [fetchData]);

  // Manually refresh the data
  const refetch = useCallback(() => {
    const controller = new AbortController();
    fetchData(controller.signal);
  }, [fetchData]);

  return { data, loading, error, refetch };
}

// 2. Main component
export default function Task8() {
  const { data: posts, loading, error, refetch } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );

  const [search, setSearch] = useState("");

  // Search posts by title
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <h1>Posts Dashboard</h1>

      <button onClick={refetch} disabled={loading}>
        {loading ? "Loading..." : "Refresh Posts"}
      </button>

      <hr />

      <label htmlFor="search">Search by title: </label>
      <input
        id="search"
        type="text"
        placeholder="Enter a post title"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {loading && <p>Fetching posts from API...</p>}

      {!loading && error && (
        <div>
          <p>Error: {error}</p>
          <button onClick={refetch}>Try Again</button>
        </div>
      )}

      {!loading && !error && filteredPosts.length === 0 && (
        <p>No posts found.</p>
      )}

      {!loading && !error && (
        <section>
          <h2>Posts ({filteredPosts.length})</h2>

          {filteredPosts.map((post) => (
            <article key={post.id}>
              <h3>
                {post.id}. {post.title}
              </h3>
              <p>{post.body}</p>
              <p>User ID: {post.userId}</p>
              <hr />
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
