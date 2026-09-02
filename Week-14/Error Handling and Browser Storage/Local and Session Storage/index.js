// Save User Information
const user={
    name:"Tarak",
    email:"gupta@gmail.com"
};

// Local Storage
localStorage.setItem(
    "user",
    JSON.stringify(user)
);

// session Storage
sessionStorage.setItem(
    "currentPage",
    "Dashboard"
);

// Received data
const savedUser = JSON.parse(
    localStorage.getItem("user")
);
const page = sessionStorage.getItem("currentPage");
console.log(savedUser);
console.log(page);

// setItem(key,value) is store data
// getItem(key) is Retrieve data
// removeItem() is Remove specific item
// clear() Remove all items
// key(index) get key by index
// length Number of stored items

// Local Storage
// It Persists after browser close,Shared across tabs,Best for long-term data
// Session Storage
// It Exists only for current tab, Removed when tab closes, best for temporary session tabs