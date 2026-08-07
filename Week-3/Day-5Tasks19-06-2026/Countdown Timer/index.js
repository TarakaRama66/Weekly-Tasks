let timeLeft = 10;

console.log("Countdown Started");

let timer = setInterval(() => {
    console.log(`${timeLeft} seconds left`);

    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timer);
        console.log("⏰ Time's Up!");
    }
}, 1000);