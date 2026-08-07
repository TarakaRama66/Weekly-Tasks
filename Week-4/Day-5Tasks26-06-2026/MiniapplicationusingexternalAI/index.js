const userDiv = document.getElementById("userData");
async function getUser() {
    userDiv.innerHTML = "Loading...";
    try {
        const response = await fetch("https://randomuser.me/api/");
        if (!response.ok) {
            throw new Error("Unable to fetch data");
        }
        const data = await response.json();
        const user = data.results[0];
        userDiv.innerHTML = `
            <img src="${user.picture.large}" alt="User Image">
            <h2>${user.name.first} ${user.name.last}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Country:</strong> ${user.location.country}</p>
            <p><strong>Age:</strong> ${user.dob.age}</p>
        `;
    } catch (error) {
        userDiv.innerHTML = `
            <h3>Error</h3>
            <p>${error.message}</p>
        `;
    }
}