function debounce(callback, delay) {
    let timer;

    return function () {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback();
        }, delay);
    };
}

const searchInput = document.getElementById("search");

searchInput.addEventListener(
    "input",
    debounce(() => {
        console.log("Searching:", searchInput.value);
    }, 1000)
);