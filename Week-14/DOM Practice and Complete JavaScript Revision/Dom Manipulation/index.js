const title = document.getElementById("title");
const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
const list = document.getElementById("list");
 
title.style.color = "blue";
 
let count = 1;
 
// Add Item
addButton.addEventListener("click", () => {
  const li = document.createElement("li");
 
  li.textContent = `Item ${count++}`;
 
  li.classList.add("item");
 
  list.appendChild(li);
});
 
// Remove Last Item
removeButton.addEventListener("click", () => {
  const lastItem = list.lastElementChild;
  if (lastItem) {
    lastItem.remove();
  }
});

// Common DOM Manipulation Methods
// element.textContent
// element.innerHTML
// element.style
// element.setAttribute()
// element.getAttribute()
// element.removeAttribute()
// element.classList.add()
// element.classList.remove()
// element.classList.toggle()
// document.createElement()
// appendChild()
// remove()
// replaceWith()
// addEventListener()
 