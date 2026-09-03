async function getUserProfile() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
 
    if (!response.ok) {
      throw new Error("User Not Found");
    }
 
    const user = await response.json();
 
    console.log("Name:", user.name);
    console.log("Email:", user.email);
 
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("Request Completed");
  }
}
 
getUserProfile();
 