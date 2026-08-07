import { employees } from "./employee.js";
import { saveEmployees, loadEmployees } from "./storage.js";
import { fetchRandomUser } from "./api.js";
import { idGenerator } from "./generator.js";
const id = idGenerator();
employees.push(...loadEmployees());
const employeeList = document.getElementById("employeeList");
const addBtn = document.getElementById("addBtn");
const apiBtn = document.getElementById("apiBtn");
const search = document.getElementById("search");
render();
addBtn.addEventListener("click", addEmployee);
apiBtn.addEventListener("click", loadRandomEmployee);
search.addEventListener("input", searchEmployee);
// Event Bubbling
document.body.addEventListener("click", () => {
    console.log("Body Clicked");
});

// Event Capturing
document.body.addEventListener("click", () => {
    console.log("Capture Phase");
}, true);

// Event Delegation
employeeList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        const employeeId = Number(e.target.dataset.id);
        const index = employees.findIndex(emp = emp.id === employeeId);
        if (index !== -1) {
            employees.splice(index, 1);
            saveEmployees(employees);
            render();
        }
    }
});
function addEmployee() {
    try {
        const name = document.getElementById("name").value;
        const department = document.getElementById("department").value;
        if (!name || !department) {
            throw new Error("Enter all fields");
        }
        employees.push({
            id: id.next().value,
            name,
            department
        });
        saveEmployees(employees);
        sessionStorage.setItem("lastEmployee", name);
        render();
    }
    catch(error){
        alert(error.message);
    }
}
async function loadRandomEmployee(){
   try{
        const user = await fetchRandomUser();
        const {
            first,
            last
        } = user.name;
        employees.push({
            id:id.next().value,
            name:first + " " + last,
            department:"API User"
        });
        saveEmployees(employees);
        render();
    }
    catch(error){
        alert(error.message);
    }
}
function render(){
    employeeList.innerHTML="";
// Iterator
const iterator = employees[Symbol.iterator]();
let result = iterator.next();
while(!result.done){
    const emp = result.value;
    employeeList.innerHTML += `
    <div>
        <h3>${emp.name}</h3>
        <p>${emp.department}</p>
        <button class="delete" data-id="${emp.id}">
        Delete
        </button>
        <hr>
        </div>
        `;
        result = iterator.next();
    }
}
function searchEmployee(){
    const value = search.value.toLowerCase();
    const filtered = employees.filter(emp =>
        emp.name.toLowerCase().includes(value)
    );
    employeeList.innerHTML="";
    filtered.forEach(emp=>{
        employeeList.innerHTML+=`
        <div>
        <h3>${emp.name}</h3>
        <p>${emp.department}</p>
        </div>
        <hr>
        `;
    });
}