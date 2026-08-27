const order = new Promise((resolve, reject)=>{
    let foodReady=true;
    if(foodReady){
        resolve("Food Delivered");
    } else{
        reject("Order Cancel");
    }
});
console.log(order);

// using .then() runs when the promise is fulfilled or success it handles success
const promise= Promise.resolve("payment Successful");

promise.then(result=>{
    console.log(result);
})

// using .catch() runs when the promise is rejected it handles errors
const promise1= Promise.reject("payment Failed");

promise1.catch(error=>{
    console.log(error);
});

// using .finally() runs success or failure it runs cleanup code
function fetchData(){
    return Promise.resolve("User Data");
}
fetchData()
.then(data=>console.log(data))
.catch(err=>console.log(err))
.finally(()=>{
    console.log("Request Completed");
});
console.log();

// failure
function fetchData1(){
    return Promise.reject("Error");
}
fetchData1()
.then(data=>console.log(data))
.catch(err=>console.log(err))
.finally(()=>{
    console.log("Network Error");
});
console.log();


