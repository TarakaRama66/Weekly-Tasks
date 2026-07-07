let seconds = 0;

console.log("Stopwatch Started");

let stopwatch = setInterval(() => {
    seconds++;
    console.log(`Elapsed Time: ${seconds}s`);

    if (seconds === 10) {
        clearInterval(stopwatch);
        console.log("⏹ Stopwatch Stopped");
    }
}, 1000);