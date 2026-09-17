document.getElementById("saveBtn")
.addEventListener("click", () => {
    const student = {name:document.getElementById("name").value, 
        course:document.getElementById("course").value
    };
    localStorage.setItem("student",JSON.stringify(student));
    alert("Student Saved");
});
document.getElementById("showBtn")
.addEventListener("click", () => {
    const data =JSON.parse(localStorage.getItem("student"));
    document.getElementById("output")
    .innerHTML = `
        <h3>Name : ${data.name}</h3>
        <h3>Course : ${data.course}</h3>
    `;
});