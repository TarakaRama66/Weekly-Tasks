const app = (function () {
  const appName = "KLM Shopping Mall";
  let users = 0;

  function addUser() {
    users++;
    console.log("User added");
  }
  function showInfo() {
    console.log(appName);
    console.log("Total users:", users);
  }
  return {addUser,showInfo};
})();
app.addUser();
app.addUser();
app.showInfo();

// It runs immediately after it is created