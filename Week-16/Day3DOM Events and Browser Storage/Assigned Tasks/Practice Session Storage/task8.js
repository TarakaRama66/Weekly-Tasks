const status =
document.getElementById("status");
 
function checkLogin() {
 
    const user =
    sessionStorage.getItem("user");
 
    if(user) {
        status.textContent =
        `Welcome ${user}`;
    } else {
        status.textContent =
        "User Not Logged In";
    }
}
 
checkLogin();
 
document.getElementById("loginBtn")
.addEventListener("click", () => {
 
    const username =
    document.getElementById("username").value;
 
    sessionStorage.setItem(
        "user",
        username
    );
 
    checkLogin();
});
 
document.getElementById("logoutBtn")
.addEventListener("click", () => {
 
    sessionStorage.removeItem("user");
 
    checkLogin();
});
 