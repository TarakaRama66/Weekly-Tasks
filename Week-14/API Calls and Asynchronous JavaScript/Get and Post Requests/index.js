async function manageUsers() {
  try {
    // GET Request
    const getResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = await getResponse.json();
    console.log("Users:", users);
    // POST Request
    const postResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: "New Post",
          body: "Created using Fetch API",
          userId: 1
        })
      }
    );
    const newPost = await postResponse.json();
    console.log("Created Post:", newPost);
  } catch (error) {
    console.log("Error:", error);
  }
}
manageUsers();
 