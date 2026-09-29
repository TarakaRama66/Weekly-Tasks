console.log("Responsive Dashboard Loaded Successfully");
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("click", () => {
        alert(card.querySelector("h3").innerText);
    });
});