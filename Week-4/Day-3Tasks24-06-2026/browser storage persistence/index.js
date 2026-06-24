// Save data in all storage types
function saveData() {
    localStorage.setItem("local", "I stay forever");
    sessionStorage.setItem("session", "I stay until tab closes");
    document.cookie ="cookie=I stay for 1 day; max-age=86400; path=/";
// IndexedDB
const request = indexedDB.open("DemoDB", 1);
request.onupgradeneeded = function (e) {
    e.target.result.createObjectStore("store");
    };
    request.onsuccess = function (e) {
        const db = e.target.result;
        const tx = db.transaction("store", "readwrite");
        tx.objectStore("store").put("I am stored in IndexedDB", "msg");
    };

    alert("Data Saved!");
}
// Display data from all storage types
function showData() {
    console.log("localStorage:", localStorage.getItem("local"));
    console.log("sessionStorage:", sessionStorage.getItem("session"));
    console.log("Cookie:", document.cookie);

    const request = indexedDB.open("DemoDB", 1);
    request.onsuccess = function (e) {
        const db = e.target.result;
        const tx = db.transaction("store", "readonly");
        const getReq = tx.objectStore("store").get("msg");
        getReq.onsuccess = function () {
            console.log("IndexedDB:", getReq.result);
        };
    };
}