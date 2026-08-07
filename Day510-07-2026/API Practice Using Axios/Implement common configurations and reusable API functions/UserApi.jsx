import API from "./API";
// Get
export const getUsers = () => API.get("/users");
// Post
export const addUser = () =>
  API.post("/users", {
    name: "Gupta",
    email: "gupta@gmail.com",
  });
// Put
export const updateUser = () =>
  API.put("/users/1", {
    id: 1,
    name: "Gupta",
    email: "gupta@gmail.com",
  });
// Patch
export const updateEmail = () =>
  API.patch("/users/1", {
    email: "new@gmail.com",
  });
// Delete
export const deleteUser = () =>
  API.delete("/users/1");