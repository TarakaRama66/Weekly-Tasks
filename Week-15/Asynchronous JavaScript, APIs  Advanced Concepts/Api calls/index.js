const output = document.getElementById("output");
const loader = document.getElementById("loader");
 
function showLoader() {
  loader.classList.remove("hidden");
}
 
function hideLoader() {
  loader.classList.add("hidden");
}
 
// GET REQUEST
 
async function getMembers() {
 
  showLoader();
 
  try {
 
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
 
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
 
    const members = await response.json();
 
    let html = `
      <h2>Gym Members</h2>
 
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
    `;
 
    members.forEach(member => {
      html += `
        <tr>
          <td>${member.id}</td>
          <td>${member.name}</td>
          <td>${member.email}</td>
        </tr>
      `;
    });
 
    html += `</table>`;
 
    output.innerHTML = html;
 
  } catch(error){
 
    output.innerHTML = `
      <p class="error">${error.message}</p>
    `;
  }
 
  hideLoader();
}
 
// POST REQUEST
 
async function addMember() {
 
  showLoader();
 
  try {
 
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        method:"POST",
 
        headers:{
          "Content-Type":"application/json"
        },
 
        body:JSON.stringify({
          name:"Rahul",
          membership:"Premium"
        })
      }
    );
 
    const data = await response.json();
 
    output.innerHTML = `
      <div class="card">
        <h2>Member Added</h2>
 
        <p>ID: ${data.id}</p>
        <p>Name: ${data.name}</p>
        <p>Plan: ${data.membership}</p>
 
        <p class="success">
          POST Request Successful
        </p>
      </div>
    `;
 
  } catch(error){
    output.innerHTML = `
      <p class="error">${error.message}</p>
    `;
  }
 
  hideLoader();
}
 
// PUT REQUEST
 
async function updateMember() {
 
  showLoader();
 
  try {
 
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
      {
        method:"PUT",
 
        headers:{
          "Content-Type":"application/json"
        },
 
        body:JSON.stringify({
          id:1,
          name:"Rahul Updated",
          membership:"Gold"
        })
      }
    );
 
    const data = await response.json();
 
    output.innerHTML = `
      <div class="card">
        <h2>Member Updated</h2>
 
        <p>ID: ${data.id}</p>
        <p>Name: ${data.name}</p>
        <p>Plan: ${data.membership}</p>
      </div>
    `;
 
  } catch(error){
    output.innerHTML = `
      <p class="error">${error.message}</p>
    `;
  }
 
  hideLoader();
}
 
// PATCH REQUEST
 
async function patchMember() {
 
  showLoader();
 
  try {
 
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
      {
        method:"PATCH",
 
        headers:{
          "Content-Type":"application/json"
        },
 
        body:JSON.stringify({
          membership:"Platinum"
        })
      }
    );
 
    const data = await response.json();
 
    output.innerHTML = `
      <div class="card">
        <h2>Membership Updated</h2>
 
        <p>New Plan:
        ${data.membership}</p>
      </div>
    `;
 
  } catch(error){
    output.innerHTML = `
      <p class="error">${error.message}</p>
    `;
  }
 
  hideLoader();
}
 
// DELETE REQUEST
 
async function deleteMember() {
 
  showLoader();
 
  try {
 
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
      {
        method:"DELETE"
      }
    );
 
    if(response.ok){
 
      output.innerHTML = `
        <div class="card">
          <h2>Delete Result</h2>
 
          <p class="success">
            Member Deleted Successfully
          </p>
        </div>
      `;
    }
 
  } catch(error){
    output.innerHTML = `
      <p class="error">${error.message}</p>
    `;
  }
 
  hideLoader();
}