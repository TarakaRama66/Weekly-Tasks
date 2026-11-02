function startExecution() {
    let output = document.getElementById("output");
    output.innerHTML = "";
    function first() {
        output.innerHTML += "First Function Started<br>";
        second();
        output.innerHTML += "First Function Ended<br>";
    }
    function second() {
        output.innerHTML += "Second Function Started<br>";
        third();
        output.innerHTML += "Second Function Ended<br>";
    }
    function third() {
        output.innerHTML += "Third Function Executed<br>";
    }
    first();
}
function clearOutput() {
    document.getElementById("output").innerHTML = "";
}