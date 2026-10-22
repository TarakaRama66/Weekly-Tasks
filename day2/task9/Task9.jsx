
import React, { useCallback, useEffect, useState } from "react";

const API_OPTIONS = {
  posts: {
    label: "Posts",
    url: "https://jsonplaceholder.typicode.com/posts?_limit=10",
  },
  users: {
    label: "Users",
    url: "https://jsonplaceholder.typicode.com/users",
  },
  empty: {
    label: "Empty Results (Demo)",
    url: "https://jsonplaceholder.typicode.com/posts?userId=999999",
  },
};

// Custom Hook
function useApiData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [requestCount, setRequestCount] = useState(0);

  const retry = useCallback(() => {
    setRequestCount((count) => count + 1);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const result = await response.json();

        if (!Array.isArray(result)) {
          throw new Error("Unexpected API response format.");
        }

        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Failed to load data.");
          setData([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => controller.abort();
  }, [url, requestCount]);

  return { data, loading, error, retry };
}

export default function Task9() {
  const [selectedType, setSelectedType] = useState("posts");
  const [search, setSearch] = useState("");

  const { data, loading, error, retry } = useApiData(
    API_OPTIONS[selectedType].url
  );

  const filteredData = data.filter((item) => {
    const searchableText = [
      item.title,
      item.name,
      item.email,
      item.body,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableText.includes(search.toLowerCase());
  });

  return (
    <main>
      <h1>API Data Dashboard</h1>

      <label htmlFor="dataset">Choose dataset: </label>

      <select
        id="dataset"
        value={selectedType}
        onChange={(event) => {
          setSelectedType(event.target.value);
          setSearch("");
        }}
      >
        {Object.entries(API_OPTIONS).map(([key, option]) => (
          <option key={key} value={key}>
            {option.label}
          </option>
        ))}
      </select>

      <button onClick={retry} disabled={loading}>
        {loading ? "Loading..." : "Retry / Refresh"}
      </button>

      <hr />

      {!loading && !error && data.length > 0 && (
        <>
          <label htmlFor="search">Search records: </label>
          <input
            id="search"
            type="text"
            placeholder="Search by title, name or email"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </>
      )}

      {/* Loading State */}
      {loading && (
        <section aria-live="polite">
          <h2>Loading data...</h2>
          <p>Please wait while we contact the server.</p>
        </section>
      )}

      {/* Error State */}
      {!loading && error && (
        <section role="alert">
          <h2>Unable to load data</h2>
          <p>{error}</p>
          <button onClick={retry}>Try Again</button>
        </section>
      )}

      {/* Empty API Response State */}
      {!loading && !error && data.length === 0 && (
        <section>
          <h2>No records available</h2>
          <p>The API returned no data for this selection.</p>
        </section>
      )}

      {/* No Search Matches State */}
      {!loading &&
        !error &&
        data.length > 0 &&
        filteredData.length === 0 && (
          <section>
            <h2>No matching records</h2>
            <p>Try a different search term.</p>
          </section>
        )}

      {/* Success State */}
      {!loading && !error && filteredData.length > 0 && (
        <section>
          <h2>
            {API_OPTIONS[selectedType].label} ({filteredData.length})
          </h2>

          {filteredData.map((item) => (
            <article key={item.id}>
              {selectedType === "users" ? (
                <>
                  <h3>{item.name}</h3>
                  <p>Email: {item.email}</p>
                  <p>Company: {item.company.name}</p>
                </>
              ) : (
                <>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <p>Post ID: {item.id}</p>
                </>
              )}

              <hr />
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
