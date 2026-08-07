// Display Welcome Message
function showMessage() {
document.getElementById("message").innerHTML =
    "Welcome to JavaScript Learning!";
}

// Add Two Numbers
function calculateSum() {

    let number1 =
        Number(document.getElementById("num1").value);

    let number2 =
        Number(document.getElementById("num2").value);

    let total = number1 + number2;

        document.getElementById("result").innerHTML =
            "Total = " + total;
}

// Display Current Time
function showTime() {

    let currentTime = new Date();

    document.getElementById("time").innerHTML =
    currentTime;
}

