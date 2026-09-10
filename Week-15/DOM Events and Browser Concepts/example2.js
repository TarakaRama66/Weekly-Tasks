//dom elements
const memberName = document.getElementById("memberName");
const memberAge = document.getElementById("memberAge");
const membershipType = document.getElementById("membershipType");
const addMemberBtn = document.getElementById("addMemberBtn");

const memberContainer = document.getElementById("memberContainer");

const searchInput = document.getElementById("searchInput");
const filterMembership = document.getElementById("filterMembership");

const sortNameBtn = document.getElementById("sortName");
const sortAgeBtn = document.getElementById("sortAge");
const sortAttendanceBtn = document.getElementById("sortAttendance");

const totalMembers = document.getElementById("totalMembers");
const basicCount = document.getElementById("basicCount");
const premiumCount = document.getElementById("premiumCount");
const vipCount = document.getElementById("vipCount");

const totalAttendance = document.getElementById("totalAttendance");
const averageAttendance = document.getElementById("averageAttendance");

const sessionCount = document.getElementById("sessionCount");
const windowWidth = document.getElementById("windowWidth");
const themeBtn = document.getElementById("themeBtn");
//local storage
let members =
  JSON.parse(localStorage.getItem("gymMembers")) || [];
//session storage
let count =
  Number(sessionStorage.getItem("sessionMembers")) || 0;
sessionCount.textContent = count;
//save data
function saveData() {
  localStorage.setItem(
    "gymMembers",
    JSON.stringify(members)
  );
}
//add member
addMemberBtn.addEventListener("click", () => {
  const name = memberName.value.trim();
  const age = Number(memberAge.value);
  const membership = membershipType.value;
  if (!name || !age) {
    alert("Please fill all fields");
    return;
  }
  const member = {id: Date.now(),name,age,membership,attendance: 0};
  members.push(member);
  saveData();
  count++;
  sessionStorage.setItem(
    "sessionMembers",
    count
  );
  sessionCount.textContent = count;
  memberName.value = "";
  memberAge.value = "";
  renderMembers();
});
//render members
function renderMembers(data = members) {
  memberContainer.innerHTML = "";
  data.forEach(member => {
    const card =
      document.createElement("div");
    card.classList.add("member-card");
    card.innerHTML = `
      <h3>${member.name}</h3>
      <p><strong>Age:</strong>
      ${member.age}</p>
      <p><strong>Membership:</strong>
      ${member.membership}</p>
      <p>
      <strong>Attendance:</strong>
      ${member.attendance}
      </p>
      <div class="member-actions">
        <button class="attendance-btn"data-id="${member.id}">+ Attendance</button>
        <button class="edit-btn"data-id="${member.id}">Edit</button>
        <button class="delete-btn"data-id="${member.id}">Delete</button>
      </div>
    `;
    memberContainer.appendChild(card);
  });
  updateStatistics();
}
//event delegation
memberContainer.addEventListener(
  "click",
  (e) => {
    const id =
      Number(e.target.dataset.id);
 
    // Delete Member
    if (
      e.target.classList.contains(
        "delete-btn"
      )
    ) {
      members = members.filter(
        member => member.id !== id
      );
      saveData();
      renderMembers();
    }
    // Attendance
    if (
      e.target.classList.contains(
        "attendance-btn"
      )
    ) {
      const member =
        members.find(
          member => member.id === id
        );
      if (member) {member.attendance++;}
      saveData();
      renderMembers();
    }
    // Edit Member
    if (
      e.target.classList.contains(
        "edit-btn"
      )
    ) {
      const member =
        members.find(
          member => member.id === id
        );
      const newName =
        prompt(
          "Enter New Name",
          member.name
        );
      const newAge =
        prompt(
          "Enter New Age",
          member.age
        );
      if (
        newName && newAge
      ) {
        member.name = newName;
        member.age = Number(newAge);
        saveData();
        renderMembers();
      }
    }
  }
);
//search
function debounce(
  callback,
  delay
) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}
searchInput.addEventListener(
  "input",
  debounce(function () {
    const value =
      this.value.toLowerCase();
    const filtered =
      members.filter(member =>
        member.name
          .toLowerCase()
          .includes(value) ||
        member.membership
          .toLowerCase()
          .includes(value)
      );
    renderMembers(filtered);
  }, 300)
);
//filter
filterMembership.addEventListener(
  "change",
  function () {
    const value = this.value;
    if (value === "All") {
      renderMembers();
      return;
    }
    const filtered =
      members.filter(
        member =>
          member.membership === value
      );
    renderMembers(filtered);
  }
);
//sort name
sortNameBtn.addEventListener(
  "click",
  () => {
    members.sort(
      (a, b) =>
        a.name.localeCompare(b.name)
    );
    renderMembers();
  }
);
//sort age
sortAgeBtn.addEventListener(
  "click",
  () => {
    members.sort(
      (a, b) => a.age - b.age
    );
    renderMembers();
  }
);
//sort attendance
sortAttendanceBtn.addEventListener(
  "click",
  () => {
    members.sort(
      (a, b) =>
        b.attendance - a.attendance
    );
    renderMembers();
  }
);
//statistics
function updateStatistics() {
  totalMembers.textContent = members.length;
  basicCount.textContent =
    members.filter(
      m => m.membership === "Basic"
    ).length;
 
  premiumCount.textContent =
    members.filter(
      m => m.membership === "Premium"
    ).length;
 
  vipCount.textContent =
    members.filter(
      m => m.membership === "VIP"
    ).length;
 
  const attendance =
    members.reduce(
      (sum, member) =>
        sum + member.attendance,
      0
    );
  totalAttendance.textContent = attendance;
  averageAttendance.textContent = members.length
      ? (
          attendance /
          members.length
        ).toFixed(1)
      : 0;
}
//dark mode
const savedTheme =
  localStorage.getItem("theme");
 
if (savedTheme === "dark") {
  document.body.classList.add(
    "dark"
  );
}
themeBtn.addEventListener(
  "click",
  () => {
    document.body.classList.toggle(
      "dark"
    );
    localStorage.setItem(
      "theme",
      document.body.classList.contains(
        "dark"
      )
        ? "dark"
        : "light"
    );
  }
);
//throttle
function throttle(
  callback,
  delay
) {
  let lastCall = 0;
  return function () {
    const now = Date.now();
    if (
      now - lastCall >= delay
    ) {
      lastCall = now;
      callback();
    }
  };
}
//window resize
window.addEventListener(
  "resize",
  throttle(() => {
    windowWidth.textContent =
      `${window.innerWidth}px`;
 
  }, 500)
);
windowWidth.textContent =
  `${window.innerWidth}px`;
//initial load
renderMembers();