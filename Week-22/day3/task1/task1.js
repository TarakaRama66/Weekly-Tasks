const heading = document.getElementById("heading");

const paragraphs = document.querySelectorAll(".message");

const changeBtn = document.getElementById("changeBtn");
const paragraphBtn = document.getElementById("paragraphBtn");
const styleBtn = document.getElementById("styleBtn");

// Change heading content
changeBtn.addEventListener("click", function () {
    heading.textContent = "Heading Changed Successfully!";
});

// Change all paragraph contents
paragraphBtn.addEventListener("click", function () {
    paragraphs.forEach(function (paragraph, index) {
        paragraph.textContent = `Paragraph ${index + 1} updated!`;
    });
});

// Change heading style
styleBtn.addEventListener("click", function () {
    heading.style.color = "blue";
    heading.style.backgroundColor = "lightyellow";
    heading.style.padding = "10px";
});
