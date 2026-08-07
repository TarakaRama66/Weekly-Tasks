function traverseDOM() {
    let secondPara = document.getElementById("second");
    // Parent Element
    console.log("Parent:");
    console.log(secondPara.parentElement);
    // Children Elements
    console.log("Children:");
    console.log(secondPara.parentElement.children);
    // First Child
    console.log("First Child:");
    console.log(secondPara.parentElement.firstElementChild);
    // Last Child
    console.log("Last Child:");
    console.log(secondPara.parentElement.lastElementChild);
    // Previous Sibling
    console.log("Previous Sibling:");
    console.log(secondPara.previousElementSibling);
    // Next Sibling
    console.log("Next Sibling:");
    console.log(secondPara.nextElementSibling);
}