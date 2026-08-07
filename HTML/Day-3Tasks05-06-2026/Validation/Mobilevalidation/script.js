function checkMobile() {
    let mobile = document.getElementById("mobile").value;

    if(mobile.length === 10 && !isNaN(mobile)) {
        alert("Valid Mobile Number");
    } else {
        alert("Invalid Mobile Number");
    }
}