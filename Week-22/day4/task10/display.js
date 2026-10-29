export function displayStudents(students, output) {
    output.innerHTML = "";

    if (students.length === 0) {
        output.textContent = "No students found.";
        return;
    }

    students.forEach(student => {
        const card = document.createElement("div");

        const name = document.createElement("h3");
        name.textContent = student.name;

        const marks = document.createElement("p");
        marks.textContent = "Marks: " + student.marks;

        card.append(name, marks);
        output.appendChild(card);
    });
}

export function displayMessage(message, output) {
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    output.appendChild(paragraph);
}
