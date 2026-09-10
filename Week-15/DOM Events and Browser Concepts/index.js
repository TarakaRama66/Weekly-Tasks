const waterInput = document.getElementById("waterInput");
const addBtn = document.getElementById("addBtn");
const waterList = document.getElementById("waterList");
const totalWater = document.getElementById("totalWater");
const searchInput = document.getElementById("searchInput");
const sessionCount = document.getElementById("sessionCount");
const windowWidth = document.getElementById("windowWidth");
 
// Local Storage Data
let entries = JSON.parse(localStorage.getItem("waterEntries")) || [];
 
// Session Storage Counter
let count = sessionStorage.getItem("entryCount") || 0;
sessionCount.textContent = `Entries Added This Session: ${count}`;
 
// Render Entries
function renderEntries(data = entries) {
  waterList.innerHTML = "";
 
  data.forEach((entry) => {
    const li = document.createElement("li");
    li.classList.add("water-item");
 
    li.innerHTML = `
      <span>${entry.amount} ml | ${entry.time}</span>
      <button class="delete-btn" data-id="${entry.id}">
        Delete
      </button>
    `;
 
    waterList.appendChild(li);
  });
 
  updateTotal();
}
 
// Add Entry
addBtn.addEventListener("click", () => {
  const amount = waterInput.value;
 
  if (!amount) {
    alert("Please enter water amount");
    return;
  }
 
  const newEntry = {
    id: Date.now(),
    amount: Number(amount),
    time: new Date().toLocaleTimeString(),
  };
 
  entries.push(newEntry);
 
  localStorage.setItem(
    "waterEntries",
    JSON.stringify(entries)
  );
 
  count++;
  sessionStorage.setItem("entryCount", count);
  sessionCount.textContent =
    `Entries Added This Session: ${count}`;
 
  waterInput.value = "";
 
  renderEntries();
});
 
// Event Delegation
waterList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const id = Number(e.target.dataset.id);
 
    entries = entries.filter(
      (entry) => entry.id !== id
    );
 
    localStorage.setItem(
      "waterEntries",
      JSON.stringify(entries)
    );
 
    renderEntries();
  }
});
 
// Total Water
function updateTotal() {
  const total = entries.reduce(
    (sum, entry) => sum + entry.amount,
    0
  );
 
  totalWater.textContent =
    `Today's Total: ${total} ml`;
}
 
// Debounce Function
function debounce(fn, delay) {
  let timer;
 
  return function () {
    clearTimeout(timer);
 
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}
 
// Search
searchInput.addEventListener(
  "input",
  debounce(function () {
    const value = this.value.toLowerCase();
 
    const filtered = entries.filter((entry) =>
      entry.amount
        .toString()
        .includes(value)
    );
 
    renderEntries(filtered);
  }, 300)
);
 
// Throttle Function
function throttle(fn, delay) {
  let lastCall = 0;
 
  return function () {
    const now = Date.now();
 
    if (now - lastCall >= delay) {
      lastCall = now;
      fn();
    }
  };
}
 
// Window Resize
window.addEventListener(
  "resize",
  throttle(() => {
    windowWidth.textContent =
      `Window Width: ${window.innerWidth}px`;
  }, 500)
);
 
windowWidth.textContent =
  `Window Width: ${window.innerWidth}px`;
 
// Initial Load
renderEntries();
 