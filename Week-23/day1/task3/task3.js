// HOISTING EXAMPLE
function showHoisting() {
    let result = "";
    result += "Before declaration: " + a + "<br>";
    var a = 100;
    result += "After declaration: " + a + "<br>";
    result += "Function Hoisting: " + display();
    document.getElementById("output").innerHTML = result;
}
function display() {
    return "Function is Hoisted";
}
// SCOPE EXAMPLE
function showScope() {
    let result = "";
    // Global Scope
    let name = "Tarak";
    function employee() {
        // Function Scope
        let age = 23;
        if (true) {
            // Block Scope
            let city = "Hyderabad";
            result += "Name: " + name + "<br>";
            result += "Age: " + age + "<br>";
            result += "City: " + city + "<br>";
        }
    }
    employee();
    document.getElementById("output").innerHTML = result;
}