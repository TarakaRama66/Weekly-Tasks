const api = "https://jsonplaceholder.typicode.com/users";
// GET Request
function getUsers() {
    fetch(api)
        .then(response => response.json())
        .then(users => {
            let result = "<h3>Users List</h3>";
            users.forEach(user => {
                result += `
                    <p>
                        <b>ID:</b> ${user.id} <br>
                        <b>Name:</b> ${user.name} <br>
                        <b>Email:</b> ${user.email}
                    </p>
                    <hr>
                `;
            });
            document.getElementById("output").innerHTML = result;
        })
        .catch(error => {
            console.log(error);
        });
}
// POST Request
function addUser() {
    fetch(api, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "Gupta",
            email: "gupta@gmail.com"
        })
    })
    .then(response => response.json())
    .then(user => {
        document.getElementById("output").innerHTML = `
            <h3>User Added Successfully</h3>
            <p>ID : ${user.id}</p>
            <p>Name : ${user.name}</p>
            <p>Email : ${user.email}</p>
        `;
    })
    .catch(error => {
        console.log(error);
    });
}
// PUT Request
function updateUser() {
    fetch(api + "/1", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: 1,
            name: "Updated Gupta",
            email: "updated@gmail.com"
        })
    })
    .then(response => response.json())
    .then(user => {
        document.getElementById("output").innerHTML = `
            <h3>User Updated Successfully</h3>
            <p>ID : ${user.id}</p>
            <p>Name : ${user.name}</p>
            <p>Email : ${user.email}</p>
        `;
    })
    .catch(error => {
        console.log(error);
    });
}
// DELETE Request
function deleteUser() {
    fetch(api + "/1", {
        method: "DELETE"
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("output").innerHTML = `
                <h3>User Deleted Successfully</h3>
            `;
        }
    })
    .catch(error => {
        console.log(error);
    });
}