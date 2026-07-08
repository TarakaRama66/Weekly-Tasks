function createElements() {

    let heading = document.createElement("h2");
    heading.textContent = "Student Dashboard";

    let para = document.createElement("p");
    para.textContent = "Welcome Gupta";

    let button = document.createElement("button");
    button.textContent = "View Profile";

    let list = document.createElement("ul");

    let item1 = document.createElement("li");
    item1.textContent = "HTML";

    let item2 = document.createElement("li");
    item2.textContent = "CSS";

    let item3 = document.createElement("li");
    item3.textContent = "JavaScript";

    list.appendChild(item1);
    list.appendChild(item2);
    list.appendChild(item3);

    let container = document.getElementById("container");

    container.appendChild(heading);
    container.appendChild(para);
    container.appendChild(button);
    container.appendChild(list);
}