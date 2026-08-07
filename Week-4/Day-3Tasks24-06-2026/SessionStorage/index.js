function Data(){
    let name = document.getElementById("username").value
    sessionStorage.setItem("userName", name);
    alert("Data Saved");
}
function getData(){
    let StoreName = sessionStorage.getItem("userName");

    document.getElementById("result").innerText = "Stored Name: " + StoreName;
}