const form =
  document.getElementById("registerForm");
 
form.addEventListener("submit", (e) => {
 
  e.preventDefault();
 
  const data =
    Object.fromEntries(
      new FormData(form)
    );
 
  // Validation
  if (!data.name.trim()) {
    alert("Name is required");
    return;
  }
 
  if (!data.email.includes("@")) {
    alert("Invalid Email");
    return;
  }
 
  if (data.password.length < 6) {
    alert(
      "Password must be at least 6 characters"
    );
    return;
  }
 
  console.log(
    "Registration Successful"
  );
 
  console.log(data);
 
  form.reset();
});
 