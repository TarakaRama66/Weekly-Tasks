function showOutput(){
// console.log()
console.log("Console Output");
console.log("Welcome to JavaScript");

// innerHTML
document.getElementById("output").innerHTML ="<h3>innerHTML Output</h3>" + "<b>Hello Gupta!</b>";

// innerText
setTimeout(()=>{
    document.getElementById("output").innerText =
        "innerText Output\nOnly plain text is displayed.";
},2000);

// textContent
setTimeout(()=>{
    document.getElementById("output").textContent =
    " textContent Output\nHTML tags are treated as text.";
},4000);

// alert()
setTimeout(()=>{
    alert("Alert Box\nWelcome!");
},6000);

//confirm()
setTimeout(()=>{
    let result = confirm("Do you like JavaScript?");
    if(result){
        console.log("User clicked OK");
    }else{
            console.log("User clicked Cancel");
        }
},8000);

// prompt()
setTimeout(()=>{
    let name = prompt("Enter your name:");

    if(name){
        alert("Hello " + name);
    }else{
        alert("No name entered.");
        }
    },10000);
}