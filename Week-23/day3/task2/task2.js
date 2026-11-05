function syncExample() {
    const output = document.getElementById("output");
    output.innerHTML = "";

    output.innerHTML += "Task 1 Started<br>";

    for (let i = 1; i <= 3; i++) {
        output.innerHTML += `Task ${i}<br>`;
    }

    output.innerHTML += "Task Completed";
}

function asyncExample() {
    const output = document.getElementById("output");
    output.innerHTML = "";

    output.innerHTML += "Task 1 Started<br>";

    setTimeout(() => {
        output.innerHTML += "Delayed Task Completed<br>";
    }, 2000);

    output.innerHTML += "Task 2 Completed<br>";
    output.innerHTML += "Main Program Completed";
}