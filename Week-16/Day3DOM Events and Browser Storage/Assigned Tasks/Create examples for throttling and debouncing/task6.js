// Throttling
let count = 0;
let isRunning = false;
window.addEventListener("scroll", () => {
    if (isRunning) return;
    isRunning = true;
    count++;
    document.getElementById("count").textContent = count;
    setTimeout(() => {
        isRunning = false;
    }, 1000);
});
// Debouncing
const employees = [
    "Taraka",
    "Rohit",
    "Anitha",
    "Varun",
    "Venkat",
    "Kiran",
    "Mahesh"
];
let timer;
document.getElementById("searchBox")
.addEventListener("input", (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        const searchText =
        e.target.value.toLowerCase();
        const matchedEmployees =
        employees.filter(emp =>
            emp.toLowerCase().includes(searchText)
        );
        document.getElementById("result")
        .innerHTML =
        matchedEmployees.join("<br>");
    }, 1000);
});