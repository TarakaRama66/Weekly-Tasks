function getUser() {
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
        const user = data.results[0];
        document.getElementById("user").innerHTML = `
            <img src="${user.picture.large}">
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>Email: ${user.email}</p>
            <p>Country: ${user.location.country}</p>
        `;
    })
    .catch(error => console.log(error));
}