function getUsers() {
    const output = document.getElementById("output");
    output.innerHTML = "Loading...";
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        })
        .then(users => {
            let result = "<h3>Users List</h3>";
            users.forEach(user => {
                result += `
                    <p>
                        <strong>Name:</strong> ${user.name}<br>
                        <strong>Email:</strong> ${user.email}
                    </p>
                    <hr>
                `;
            });
            output.innerHTML = result;
        })
        .catch(error => {
            output.innerHTML = `
                <h3>Error</h3>
                <p>${error.message}</p>
            `;
            console.log(error);
        });
}