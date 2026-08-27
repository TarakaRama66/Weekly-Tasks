// EventLoop
// Event loop is a mechanism that continuously checks
// is the callstack is empty and are there any tasks in the microtask queue or callbackQueue
console.log("\n*Event Loop")
console.log("1");
setTimeout(()=>{
    console.log("2")},3000);
Promise.resolve().then(()=>{
    console.log("3");
})
.then(()=>{
    console.log("4");
})
console.log("5");

// Execution Order
// step1:
// Run all synchronous code (callstack) 
// step2:
// Run all Promises(microtasks)
// step3:
// Run setTimeout/setInterval(macrotasks)
// step4:
// Repeat