const membersDiv = document.getElementById("members");
const statusText = document.getElementById("status");
const API = "https://jsonplaceholder.typicode.com/users";
// GET
async function loadMembers() {
  statusText.textContent = "Loading Members...";
  try {
    const response = await fetch(API);
    if(!response.ok){
      throw new Error("Failed To Fetch Data");
    }
    const members = await response.json();
    membersDiv.innerHTML = "";
    members.forEach(member => {
      membersDiv.innerHTML += `
        <div class="member">
          <h3>${member.name}</h3>
          <p>${member.email}</p>
        </div>
      `;
    });
    statusText.textContent = "Members Loaded";
  } catch(error){statusText.textContent = error.message;}
}
// POST
async function addMember() {
  try {
    const response = await fetch(API, {
      method:"POST",
      headers:{
        "Content-Type":
        "application/json"
      },
      body:JSON.stringify({
        name:"Rahul",
        email:"rahul@gmail.com"
      })
    });
    const data = await response.json();
    statusText.textContent = `Added Member ID ${data.id}`;
  } catch(error){
    statusText.textContent = error.message;
  }
}
// PUT
async function updateMember() {
  try {
    const response = await fetch(`${API}/1`, {
      method:"PUT",
      headers:{
        "Content-Type":
        "application/json"
      },
      body:JSON.stringify({
        id:1,
        name:"Rahul Updated",
        email:"updated@gmail.com"
      })
    });
    const data = await response.json();
    statusText.textContent =`${data.name} Updated`;
  } catch(error){
    statusText.textContent = error.message;
  }
}
// PATCH
async function patchMember() {
  try {
    const response = await fetch(`${API}/1`, {
      method:"PATCH",
      headers:{
        "Content-Type":
        "application/json"
      },
      body:JSON.stringify({membership:"Platinum"})
    });
    await response.json();
    statusText.textContent = "Membership Updated";
  } catch(error){
    statusText.textContent = error.message;
  }
}
// DELETE
async function deleteMember() {
  try {
    const response = await fetch(`${API}/1`, {
      method:"DELETE"
    });
    if(response.ok){
      statusText.textContent = "Member Deleted";
    }
  } catch(error){
    statusText.textContent = error.message;
  }
}
// EVENTS
document.getElementById("loadBtn").addEventListener("click",loadMembers);
document.getElementById("addBtn").addEventListener("click",addMember);
document.getElementById("updateBtn").addEventListener("click",updateMember);
document.getElementById("patchBtn").addEventListener("click",patchMember);
document.getElementById("deleteBtn").addEventListener("click",deleteMember);
 