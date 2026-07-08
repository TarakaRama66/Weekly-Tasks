function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(name === "") {
        alert("Name is required");
        return false;
    }

    if(!email.includes("@")) {
        alert("Enter a valid email");
        return false;
    }

    if(password.length < 6) {
        alert("Password must contain at least 8 characters");
        return false;
    }

    alert("Form Submitted Successfully");
    return true;
}
