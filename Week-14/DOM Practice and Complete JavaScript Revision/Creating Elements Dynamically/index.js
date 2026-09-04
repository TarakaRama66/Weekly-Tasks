const app = document.getElementById("app");
 
// Create Heading
const heading = document.createElement("h1");
heading.textContent = "Student List";
 
// Create List
const ul = document.createElement("ul");
const students = ["Gupta","Tarak","Tilak"];
students.forEach((student) => {
  const li = document.createElement("li");
  li.textContent = student;
  ul.appendChild(li);
});
 
// Create Button
const btn = document.createElement("button");
btn.textContent = "Add Student";
btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "New Student";
  ul.appendChild(li);
});
// Append Everything
app.appendChild(heading);
app.appendChild(ul);
app.appendChild(btn);

// CreateElement it creates a new element
// createTextNode it creates a text node
// appendChild() Adds element at end
// append() adds element/text
// prepend() adds element at beginning
// remove() removes element
// replaceWith() replaces element
// setAttribute() adds attribute
// classList.add() adds class
// addEventListener() adds events