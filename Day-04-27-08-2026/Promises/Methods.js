// Promise.resolve() it creates an immediately successful promise

const resolvedPromise = Promise.resolve("Resolved Data");
resolvedPromise.then(data => {
  console.log("Promise.resolve():", data);
});

// promise.reject() it creates an immediately failed promise

const rejectedPromise = Promise.reject("Rejected Error");
rejectedPromise.catch(error => {
  console.log("Promise.reject():", error);
});

// Promise.all() it waits for all promises to succeed

const api1 = Promise.resolve("Users API");
const api2 = Promise.resolve("Products API");
const api3 = Promise.resolve("Orders API");

Promise.all([api1, api2, api3])
  .then(result => {
    console.log("Promise.all():", result);
  })
  .catch(error => {
    console.log(error);
  });

// Promise.race() first settled promise wins

const fastAPI = new Promise(resolve => {
  setTimeout(() => {
    resolve("Fast API Response");
  }, 1000);
});
const slowAPI = new Promise(resolve => {
  setTimeout(() => {
    resolve("Slow API Response");
  }, 3000);
});

Promise.race([fastAPI, slowAPI])
  .then(result => {
    console.log("Promise.race():", result);
  });

// Promise.allsettled() returns all results, success or failure

const successPromise = Promise.resolve("Login Success");
const failedPromise = Promise.reject("Payment Failed");
Promise.allSettled([successPromise, failedPromise])
  .then(result => {
    console.log("Promise.allSettled():", result);
  });

// promise.any() first successful promise wins

const error1 = Promise.reject("Server Error");
const success1 = new Promise(resolve => {
  setTimeout(() => {
    resolve("Data Loaded");
  }, 2000);
});
const error2 = Promise.reject("Network Error");
Promise.any([error1, success1, error2])
  .then(result => {
    console.log("Promise.any():", result);
  })
  .catch(error => {
    console.log(error);
  });
