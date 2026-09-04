// By ID
const title = document.getElementById("title");
console.log(title);
// By Class Name
const infos = document.getElementsByClassName("info");
console.log(infos);
// By Tag Name
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
// First matching element
const firstBox = document.querySelector(".box");
console.log(firstBox);
// All matching elements
const allBoxes = document.querySelectorAll(".box");

allBoxes.forEach((box, index) => {
  console.log(`Box ${index + 1}:`, box.textContent);
});