let seconds = 10;

let timer = setInterval(() => {
    console.log("OTP expires in:", seconds, "seconds");

    seconds--;

    if (seconds < 0) {
        clearInterval(timer);
        console.log("OTP Expired");
    }
}, 1000);