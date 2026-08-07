function throttle(callback, delay) {
    let isRunning = false;
    return function () {
        if (isRunning) return;
        isRunning = true;
        callback();
        setTimeout(() => {
            isRunning = false;
        }, delay);
    };
}
window.addEventListener(
    "scroll",
    throttle(() => {
        console.log("Scroll Position:", window.scrollY);
    }, 1000)
);