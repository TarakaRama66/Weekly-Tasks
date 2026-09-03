function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    console.log("Fetching User...");
 
    setTimeout(() => {
      if (userId > 0) {
        resolve({
          id: userId,
          name: "Gupta",
          email: "gupta@example.com"
        });
      } else {
        reject("Invalid User ID");
      }
    }, 2000);
  });
}
async function getUserDetails() {
  try {
    const user = await fetchUser(1);
 
    console.log("User Details:");
    console.log(user);
 
    console.log(`Welcome ${user.name}`);
 
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Operation Completed");
  }
}
getUserDetails();
 