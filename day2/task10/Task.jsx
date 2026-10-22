
import React, { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export default function Task10() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editingId, setEditingId] = useState(null);

  // GET: Fetch posts
  async function fetchPosts(signal) {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}?_limit=10`, { signal });

      if (!response.ok) {
        throw new Error(`GET failed: ${response.status}`);
      }

      const data = await response.json();
      setPosts(data);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message || "Failed to fetch posts.");
      }
    } finally {
      if (!signal?.aborted) {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    fetchPosts(controller.signal);

    return () => controller.abort();
  }, []);

  // POST: Create a post
  async function createPost(event) {
    event.preventDefault();

    if (!title.trim() || !body.trim()) {
      setMessage("Enter both a title and body.");
      return;
    }

    setActionLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          body: body.trim(),
          userId: 1,
        }),
      });

      if (!response.ok) {
        throw new Error(`POST failed: ${response.status}`);
      }

      const newPost = await response.json();

      // Add simulated API result to local UI
      setPosts((previous) => [newPost, ...previous]);
      setTitle("");
      setBody("");
      setMessage(`Post created successfully. ID: ${newPost.id}`);
    } catch (err) {
      setError(err.message || "Could not create post.");
    } finally {
      setActionLoading(false);
    }
  }

  // PUT: Replace a post
  async function replacePost(post) {
    setActionLoading(true);
    setError("");
    setMessage("");

    const updatedPost = {
      id: post.id,
      title: `${post.title} (Replaced)`,
      body: "This post was replaced using PUT.",
      userId: post.userId ?? 1,
    };

    try {
      const response = await fetch(`${API_URL}/${post.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPost),
      });

      if (!response.ok) {
        throw new Error(`PUT failed: ${response.status}`);
      }

      const result = await response.json();

      setPosts((previous) =>
        previous.map((item) =>
          item.id === post.id ? result : item
        )
      );

      setMessage(`Post ${post.id} replaced successfully.`);
    } catch (err) {
      setError(err.message || "Could not replace post.");
    } finally {
      setActionLoading(false);
    }
  }

  // PATCH: Update only the title
  async function patchPost(post) {
    setActionLoading(true);
    setError("");
    setMessage("");

    const updatedTitle = `${post.title} (Patched)`;

    try {
      const response = await fetch(`${API_URL}/${post.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: updatedTitle }),
      });

      if (!response.ok) {
        throw new Error(`PATCH failed: ${response.status}`);
      }

      const result = await response.json();

      setPosts((previous) =>
        previous.map((item) =>
          item.id === post.id ? { ...item, ...result } : item
        )
      );

      setMessage(`Post ${post.id} title updated successfully.`);
    } catch (err) {
      setError(err.message || "Could not update post.");
    } finally {
      setActionLoading(false);
    }
  }

  // DELETE: Remove a post
  async function deletePost(id) {
    setActionLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`DELETE failed: ${response.status}`);
      }

      setPosts((previous) =>
        previous.filter((post) => post.id !== id)
      );

      setMessage(`Post ${id} deleted successfully.`);
    } catch (err) {
      setError(err.message || "Could not delete post.");
    } finally {
      setActionLoading(false);
    }
  }

  function startEdit(post) {
    setEditingId(post.id);
    setTitle(post.title);
    setBody(post.body);
  }

  // Use POST for a new post or PATCH for editing
  async function handleSubmit(event) {
    event.preventDefault();

    if (editingId === null) {
      await createPost(event);
      return;
    }

    if (!title.trim() || !body.trim()) {
      setMessage("Enter both a title and body.");
      return;
    }

    const id = editingId;
    setActionLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          body: body.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error(`PATCH failed: ${response.status}`);
      }

      const result = await response.json();

      setPosts((previous) =>
        previous.map((post) =>
          post.id === id ? { ...post, ...result } : post
        )
      );

      setEditingId(null);
      setTitle("");
      setBody("");
      setMessage(`Post ${id} updated successfully.`);
    } catch (err) {
      setError(err.message || "Could not update post.");
    } finally {
      setActionLoading(false);
    }
  }

  function cancelEdit() {
    setEditingId(null);
    setTitle("");
    setBody("");
    setMessage("");
  }

  return (
    <main>
      <h1>REST API CRUD Dashboard</h1>

      <p>GET, POST, PUT, PATCH and DELETE operations</p>

      <button
        onClick={() => fetchPosts()}
        disabled={loading || actionLoading}
      >
        Refresh Posts
      </button>

      <hr />

      <h2>{editingId === null ? "Create Post" : "Edit Post"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <textarea
          placeholder="Post body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />

        <button type="submit" disabled={actionLoading}>
          {actionLoading
            ? "Processing..."
            : editingId === null
              ? "Create Post (POST)"
              : "Save Changes (PATCH)"}
        </button>

        {editingId !== null && (
          <button type="button" onClick={cancelEdit}>
            Cancel
          </button>
        )}
      </form>

      {message && <p role="status">{message}</p>}
      {error && <p role="alert">Error: {error}</p>}

      <hr />

      <h2>Posts ({posts.length})</h2>

      {loading ? (
        <p>Loading posts...</p>
      ) : error && posts.length === 0 ? (
        <p>Unable to load posts. Try refreshing.</p>
      ) : posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>Post ID: {post.id}</p>

            <button
              onClick={() => startEdit(post)}
              disabled={actionLoading}
            >
              Edit
            </button>

            <button
              onClick={() => replacePost(post)}
              disabled={actionLoading}
            >
              Replace (PUT)
            </button>

            <button
              onClick={() => patchPost(post)}
              disabled={actionLoading}
            >
              Change Title (PATCH)
            </button>

            <button
              onClick={() => deletePost(post.id)}
              disabled={actionLoading}
            >
              Delete
            </button>

            <hr />
          </article>
        ))
      )}
    </main>
  );
}
