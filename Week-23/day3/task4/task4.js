const output = document.getElementById("output");
//Creating a Promise
function createPromise() {
    return new Promise((resolve, reject) => {
        let isCompleted = true;
        if (isCompleted) {
            resolve("Task Completed Successfully!");
        } else {
            reject("Task Failed!");
        }
    });
}
//Handling Resolved Promise
function successPromise() {
    output.innerHTML = "Processing...";
    createPromise()
        .then((result) => {
            output.innerHTML = result;
        })
        .catch((error) => {
            output.innerHTML = error;
        })
        .finally(() => {
            console.log("Promise Execution Finished");
        });
}
// Handling Rejected Promise
function failurePromise() {
    const myPromise = new Promise((resolve, reject) => {
        let isSuccess = false;
        setTimeout(() => {
            if (isSuccess) {
                resolve("Operation Successful!");
            } else {
                reject("Something Went Wrong!");
            }
        }, 1500);
    });
    output.innerHTML = "Please Wait...";
    myPromise
        .then((result) => {
            output.innerHTML = result;
        })
        .catch((error) => {
            output.innerHTML = error;
        })
        .finally(() => {
            console.log("Promise Settled");
        });
}
// Student Result Using Promise
function checkMarks() {
    output.innerHTML = "Checking Student Result...";
    let marks = 75;
    const resultPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (marks >= 40) {
                resolve("Student Passed! Marks: " + marks);
            } else {
                reject("Student Failed! Marks: " + marks);
            }
        }, 2000);
    });
    resultPromise
        .then((result) => {
            output.innerHTML = result;
        })
        .catch((error) => {
            output.innerHTML = error;
        })
        .finally(() => {
            console.log("Result Checking Completed");
        });
}