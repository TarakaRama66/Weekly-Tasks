// Event Bubbling
grandParent.addEventListener("click",()=>{
    console.log("Grand Parent");
});

parent.addEventListener("click",()=>{
    console.log("Parent");
});

child.addEventListener("click",()=>{
    console.log("Child");
});
// Event Capturing
grandParent.addEventListener(
    "click",
    ()=>console.log("Grand Parent"),
    true
);
 
parent.addEventListener(
    "click",
    ()=>console.log("Parent"),
    true
);
 
child.addEventListener(
    "click",
    ()=>console.log("Child"),
    true
);