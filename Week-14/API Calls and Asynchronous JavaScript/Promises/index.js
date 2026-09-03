function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    console.log("Fetching user data...");
 
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
fetchUserData(1)
  .then(user => {
    console.log("User Found:");
    console.log(user);
 
    // Promise Chaining
    return `Welcome ${user.name}`;
  })
  .then(message => {
    console.log(message);
 
    return "Loading Dashboard...";
  })
  .then(status => {
    console.log(status);
  })
  .catch(error => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Request Completed");
  });
 