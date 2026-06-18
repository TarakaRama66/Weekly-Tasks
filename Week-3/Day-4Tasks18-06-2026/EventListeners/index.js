let button = document.getElementById("btn");

button.addEventListener("click", function () {

    let name =
        document.getElementById("nameInput").value;

    document.getElementById("result").textContent =
        "Welcome " + name;
});