import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function Task2() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionLoading, setActionLoading] = useState(false);
  const [message, setMessage] = useState("");

  // GET: Fetch posts when the component mounts
  useEffect(() => {
    const controller = new AbortController();

    async function fetchPosts() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API_URL}?_limit=10`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Unable to fetch posts.");
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

  // POST: Create a post
  async function addPost(event) {
    event.preventDefault();

    if (!title.trim() || !body.trim()) {
      setError("Please enter both a title and body.");
      return;
    }

    await performAction(async () => {
      const newPost = {
        userId: 1,
        title: title.trim(),
        body: body.trim()
      };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
      });

      if (!response.ok) {
        throw new Error("Failed to create post.");
      }

      const createdPost = await response.json();

      setPosts(previous => [createdPost, ...previous]);
      setTitle("");
      setBody("");
      setMessage("Post created successfully.");
    });
  }

  // Shared loading and error handling for mutations
  async function performAction(action) {
    try {
      setActionLoading(true);
      setError("");
      setMessage("");

      await action();
    } catch (err) {
      setError(err.message || "Request failed.");
    } finally {
      setActionLoading(false);
    }
  }

  // PUT: Replace the complete post
  async function updatePost(post) {
    await performAction(async () => {
      const updatedPost = {
        ...post,
        title: `Updated: ${post.title}`,
        body: `${post.body} (Updated using PUT)`
      };

      const response = await fetch(`${API_URL}/${post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedPost)
      });

      if (!response.ok) {
        throw new Error("Failed to update post using PUT.");
      }

      const data = await response.json();

      setPosts(previous =>
        previous.map(item =>
          item.id === post.id ? data : item
        )
      );

      setMessage("Post replaced successfully using PUT.");
    });
  }

  // PATCH: Update only the title
  async function patchPost(post) {
    await performAction(async () => {
      const updatedTitle = `Patched: ${post.title}`;

      const response = await fetch(`${API_URL}/${post.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: updatedTitle
        })
      });

      if (!response.ok) {
        throw new Error("Failed to update post using PATCH.");
      }

      const data = await response.json();

      setPosts(previous =>
        previous.map(item =>
          item.id === post.id ? { ...item, ...data } : item
        )
      );

      setMessage("Post title updated successfully using PATCH.");
    });
  }

  // DELETE: Delete a post
  async function deletePost(id) {
    await performAction(async () => {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
      });

      if (!response.ok) {
        throw new Error("Failed to delete post.");
      }

      setPosts(previous =>
        previous.filter(post => post.id !== id)
      );

      setMessage("Post deleted successfully.");
    });
  }

  return (
    <main>
      <h1>React REST API Practice</h1>
      <p>Practice GET, POST, PUT, PATCH, and DELETE.</p>

      <hr />

      <h2>Create a Post (POST)</h2>

      <form onSubmit={addPost}>
        <div>
          <label htmlFor="title">Post Title:</label>
          <br />
          <input
            id="title"
            value={title}
            onChange={event => setTitle(event.target.value)}
            placeholder="Enter post title"
            required
          />
        </div>

        <br />

        <div>
          <label htmlFor="body">Post Content:</label>
          <br />
          <textarea
            id="body"
            value={body}
            onChange={event => setBody(event.target.value)}
            placeholder="Enter post content"
            required
          />
        </div>

        <br />

        <button type="submit" disabled={actionLoading}>
          {actionLoading ? "Processing..." : "Create Post"}
        </button>
      </form>

      <hr />

      <h2>Posts (GET)</h2>

      {loading && <p>Loading posts...</p>}

      {error && (
        <p role="alert">
          Error: {error}
          {" "}
          <button
            type="button"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </p>
      )}

      {message && <p role="status">{message}</p>}

      {!loading && !error && posts.length === 0 && (
        <p>No posts available.</p>
      )}

      {!loading && (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <p>Post ID: {post.id}</p>

              <button
                type="button"
                disabled={actionLoading}
                onClick={() => updatePost(post)}
              >
                PUT: Replace Post
              </button>{" "}

              <button
                type="button"
                disabled={actionLoading}
                onClick={() => patchPost(post)}
              >
                PATCH: Update Title
              </button>{" "}

              <button
                type="button"
                disabled={actionLoading}
                onClick={() => deletePost(post.id)}
              >
                DELETE
              </button>

              <hr />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Task2;