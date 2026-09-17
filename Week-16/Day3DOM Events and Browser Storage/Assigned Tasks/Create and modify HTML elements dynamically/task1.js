// Create and modify HTML elements dynamically
const employees = [
    {id:1,name:"Taraka",role:"Frontend Developer"},
    {id:2,name:"Siddu",role:"React Developer"},
    {id:3,name:"Tilak",role:"UI Designer"}
];
document.getElementById("loadEmployees").addEventListener("click",()=>{
    const container = document.getElementById("employees");
    container.innerHTML = "";
    employees.forEach(emp=>{
        const card = document.createElement("div");
        card.innerHTML = `
            <h3>${emp.name}</h3>
            <p>${emp.role}</p>
            <button class="promote">Promote</button>
        `;
        card.querySelector(".promote")
        .addEventListener("click",()=>{
            card.querySelector("p").textContent =
            "Senior " + emp.role;
        });
        container.appendChild(card);
    });
});