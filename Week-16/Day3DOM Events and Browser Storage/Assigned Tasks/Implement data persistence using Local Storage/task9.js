const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesList = document.getElementById("notesList");
let notes = JSON.parse(localStorage.getItem("notes")) || [];
 
displayNotes();
addBtn.addEventListener("click", () => {
    const note = noteInput.value;
    if(note === "") return;
    notes.push(note);
    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );
    noteInput.value = "";
    displayNotes();
});
function displayNotes() {
    notesList.innerHTML = "";
    notes.forEach((note,index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${note}
            <button onclick="deleteNote(${index})">
                Delete
            </button>
        `;
        notesList.appendChild(li);
    });
}
function deleteNote(index) {
    notes.splice(index,1);
    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );
    displayNotes();
}