function addStudent() {

    let student = document.createElement("p");

    student.textContent = "New Student";

    document.getElementById("studentList")
            .appendChild(student);
}

function removeStudent() {

    let list = document.getElementById("studentList");

    if (list.lastElementChild) {
        list.lastElementChild.remove();
    }
}