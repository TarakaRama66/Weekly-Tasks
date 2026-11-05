function runExample() {
    const output = document.getElementById("output");
    output.innerHTML = "";

    function show(message) {
        output.innerHTML += message + "<br>";
    }

    show("Start");

    setTimeout(() => {
        show("SetTimeout Callback");
    }, 0);

    Promise.resolve().then(() => {
        show("Promise Callback");
    });

    show("End");
}