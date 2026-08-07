function updatePage() {

    // Selecting Elements
    let title = document.getElementById("title");
    let username = document.getElementById("username");
    let message = document.getElementById("message");
    let image = document.getElementById("profile");
    let link = document.getElementById("website");

    // Reading Properties
    console.log(title.textContent);
    console.log(username.value);
    console.log(message.className);
    console.log(image.src);
    console.log(link.href);

    // Modifying Properties

    // Text Content
    title.textContent = "DOM Updated Successfully";

    // Input Value
    username.value = "Mahesh Babu";

    // Style
    message.style.color = "blue";
    message.style.fontSize = "22px";

    // Text
    message.textContent = "About Mahesh Babu";

    // Class Name
    message.className = "active";

    // Image Source
    image.src = "/HTML/Day-1Tasks01-06-2026/Maheshbabu.jpg";

    // Link
    link.href = "https://en.wikipedia.org/wiki/Mahesh_Babu"; target="_blank";
    link.textContent = "Visit Mahesh babu Wikipedia";
}