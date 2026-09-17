const output=document.getElementById("output");

document.getElementById("actionBtn")
.addEventListener("click",()=>{
    output.textContent="Button Click Event";
});

document.getElementById("username")
.addEventListener("input",(e)=>{
    output.textContent="Typing : "+e.target.value;
});

document.getElementById("course")
.addEventListener("change",(e)=>{
    output.textContent="Selected : "+e.target.value;
});

document.getElementById("registrationForm")
.addEventListener("submit",(e)=>{
    e.preventDefault();
    output.textContent="Form Submitted";
});

document.getElementById("actionBtn")
.addEventListener("mouseenter",()=>{
    output.textContent="Mouse Enter Event";
});
 
document.getElementById("username")
.addEventListener("keydown",(e)=>{
    output.textContent="Key Pressed : "+e.key;
});