function loadUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            let output = "";
            users.forEach(user => {
                output += `
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>City:</strong> ${user.address.city}</p>
                    <hr>
                `;
            });
            document.getElementById("users").innerHTML = output;
        })
        .catch(error => {
            document.getElementById("users").innerHTML =
                "<h3>Failed to load users.</h3>";
            console.log(error);
        });
}