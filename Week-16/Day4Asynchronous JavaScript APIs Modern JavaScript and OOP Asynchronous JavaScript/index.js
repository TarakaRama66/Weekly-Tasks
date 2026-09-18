// common utilities
const output = document.getElementById("output");
const status = document.getElementById("status");
function showOutput(title, data) {
    output.innerHTML = `
        <div class="result-card">
            <h3>${title}</h3>
            <pre>${data}</pre>
        </div>
    `;
}
function setStatus(message, className = "") {
    status.className = className;
    status.textContent = message;
}
//timers
let intervalId = null;
document.getElementById("timeoutBtn")
.addEventListener("click", timeoutDemo);
function timeoutDemo() {
    setStatus("Running setTimeout...", "loading");
    showOutput("setTimeout","Waiting 3 seconds...");
    setTimeout(() => {
        setStatus("setTimeout Completed","success");
        showOutput("setTimeout Result","Executed after 3 seconds");
    }, 3000);
}
//setinterval
document.getElementById("intervalBtn")
.addEventListener("click", intervalDemo);
function intervalDemo() {
    let count = 0;
    clearInterval(intervalId);
    setStatus("Interval Started","loading");
    intervalId = setInterval(() => {count++;
        showOutput("setInterval",`Counter : ${count}`);
        if (count === 10) {
            clearInterval(intervalId);
            setStatus("Interval Auto Stopped","success");
        }
    }, 1000);
}
//stop interval
document.getElementById("stopIntervalBtn")
.addEventListener("click", stopInterval);
function stopInterval() {clearInterval(intervalId);
    setStatus("Interval Stopped","error");
    showOutput("Interval","Stopped Manually");
}
//event loop demo
document.getElementById("eventLoopBtn")
.addEventListener("click", eventLoopDemo);
function eventLoopDemo() {
    let result = [];
    result.push("1. Start");
    setTimeout(() => {
        result.push("4. setTimeout Callback");
        showOutput("Event Loop",result.join("\n"));
    }, 0);
    Promise.resolve().then(() => {
        result.push("3. Promise Callback");
    });
    result.push("2. End");
    setTimeout(() => {
        showOutput("Execution Order",
            result.join("\n")
        );
    }, 100);
}
//create promise
document.getElementById("promiseBtn")
.addEventListener("click", createPromiseDemo);
function createPromiseDemo() {
    setStatus("Creating Promise...","loading");
    const employeePromise =
        new Promise((resolve, reject) => {
            let success = true;
            setTimeout(() => {
                if (success) {
                    resolve("Employee Data Loaded");
                } else {
                    reject("Failed To Load Employee");
                }
            }, 2000);
        });
    employeePromise
        .then(data => {
            setStatus("Promise Resolved","success");
            showOutput("Promise Result",data);
        })
        .catch(error => {
            setStatus("Promise Rejected","error");
            showOutput("Promise Error",error);
        });
}
//promise chaining
document.getElementById("chainBtn")
.addEventListener("click", promiseChainDemo);
function promiseChainDemo() {
    setStatus("Running Chain...","loading");
    new Promise(resolve => {
        setTimeout(() => {
            resolve("User Loaded");
        }, 1000);
    })
    .then(data => {
        return data +"\nOrders Loaded";
    })
    .then(data => {
        return data +"\nPayments Loaded";
    })
    .then(data => {
        return data +"\nInvoices Loaded";
    })
    .then(data => {
        setStatus("Chain Completed","success");
        showOutput("Promise Chaining",data);
    })
    .catch(error => {
        setStatus("Chain Failed","error");
        showOutput("Error",error);
    });
}
//promise all
document.getElementById("allBtn")
.addEventListener("click", promiseAllDemo);
function promiseAllDemo() {
    let p1 = Promise.resolve("Employees Loaded");
    let p2 = Promise.resolve("Departments Loaded");
    let p3 = Promise.resolve("Projects Loaded");
    Promise.all([p1,p2,p3])
    .then(result => {
        showOutput("Promise.all",result.join("\n"));
    })
    .catch(error => {
        showOutput("Promise.all Error",error);
    });
}
//promise.allsettled
document.getElementById("allSettledBtn")
.addEventListener("click",promiseAllSettledDemo);
function promiseAllSettledDemo() {
    let p1 = Promise.resolve("Success API");
    let p2 = Promise.reject("Failed API");
    let p3 = Promise.resolve("Employee API");
    Promise.allSettled([p1,p2,p3])
    .then(result => {
        showOutput("Promise.allSettled",JSON.stringify(result,null,2));
    });
}
//promise.race
document.getElementById("raceBtn")
.addEventListener("click", promiseRaceDemo);
function promiseRaceDemo() {
    let p1 = new Promise(resolve => {
            setTimeout(() => {
                resolve("API 1 Won");
            }, 3000);
        });
    let p2 = new Promise(resolve => {
            setTimeout(() => {
                resolve("API 2 Won");
            }, 1000);
        });
    Promise.race([p1,p2])
    .then(result => {
        showOutput("Promise.race",result);
    });
}
//promise.any
document.getElementById("anyBtn")
.addEventListener("click", promiseAnyDemo);
function promiseAnyDemo() {
    let p1 = Promise.reject("Server 1 Failed");
    let p2 = Promise.reject("Server 2 Failed");
    let p3 = Promise.resolve("Server 3 Success");
    Promise.any([p1,p2,p3])
    .then(result => {
        showOutput("Promise.any",result);
    })
    .catch(error => {
        showOutput("Any Error",error);
    });
}
//Async await fetch
const API_URL = "https://jsonplaceholder.typicode.com/users";
//state management
function showLoadingState() {
    status.className = "loading";
    status.innerHTML = "Loading Data...";
    output.innerHTML = "";
}
function showSuccessState(message) {
    status.className = "success";
    status.innerHTML = `${message}`;
}
function showErrorState(message) {
    status.className = "error";
    status.innerHTML = `${message}`;
}
function showEmptyState() {
    status.className = "empty";
    status.innerHTML = "No Data Found";
}
//Async Await Demo
document.getElementById("asyncBtn")
.addEventListener("click",asyncAwaitDemo);
async function asyncAwaitDemo() {
    showLoadingState();
    let employeePromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve({id: 101,name: "Tarak",role: "Frontend Developer"});
            }, 2000);
        });
    let employee = await employeePromise;
    showSuccessState("Async Await Executed");
    showOutput("Async Await Result",JSON.stringify(employee,null,2));
}
//try catch demo
document.getElementById("tryCatchBtn")
.addEventListener("click",tryCatchDemo);
async function tryCatchDemo() {
    try {
        showLoadingState();
        await new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    reject("Server Connection Failed");
                }, 1500);
            }
        );
    }
    catch(error) {
        showErrorState(error);
        showOutput("Try Catch Example",error);
    }
}
//get users
document.getElementById("getUsersBtn")
.addEventListener("click",getUsers);
async function getUsers() {
    try {
        showLoadingState();
        const response =await fetch(API_URL);
        const users =await response.json();
        if(users.length === 0){
            showEmptyState();
            return;
        }
        showSuccessState("Users Loaded Successfully");
        let html = "";
        users.forEach(user => {
            html += `
            <div class="result-card">
                <h3>${user.name}</h3>
                <p>Email:${user.email}</p>
                <p>Phone:${user.phone}</p>
                <p>Company:${user.company.name}</p>
            </div>`;
        });
        output.innerHTML = html;
    }
    catch(error){
        showErrorState("Failed To Fetch Users");
        output.innerHTML = error.message;
    }
}
//post user
document.getElementById("postUserBtn")
.addEventListener("click",createUser);
async function createUser() {
    try {
        showLoadingState();
        const response = await fetch(API_URL, {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({
                    name:"Tarak",
                    email:"tarak@gmail.com",
                    role:"Frontend Developer"
                })
            });
        const data = await response.json();
        showSuccessState("User Created");
        showOutput("POST Response",JSON.stringify(data,null,2));
    }
    catch(error){
        showErrorState("POST Request Failed");
    }
}
//put user
document.getElementById("putUserBtn")
.addEventListener("click",updateUser);
async function updateUser() {
    try {
        showLoadingState();
        const response =await fetch(`${API_URL}/1`,
                {
                    method:"PUT",
                    headers:{"Content-Type":"application/json"},
                    body: JSON.stringify({
                        id:1,
                        name:"Updated Employee",
                        email:"updated@gmail.com",
                        role:"Senior Developer"
                    })
                }
            );
        const data = await response.json();
        showSuccessState("User Updated");
        showOutput("PUT Response",JSON.stringify(data,null,2));
    }
    catch(error){
        showErrorState("PUT Request Failed");
    }
}
//patch user
document.getElementById("patchUserBtn")
.addEventListener("click",patchUser);
async function patchUser() {
    try {
        showLoadingState();
        const response =await fetch(`${API_URL}/1`,
                {
                    method:"PATCH",
                    headers:{"Content-Type":"application/json"},
                    body: JSON.stringify({role:"Team Lead"})
                }
            );
        const data = await response.json();
        showSuccessState("User Patched");
        showOutput("PATCH Response",JSON.stringify(data,null,2));
    }
    catch(error){
        showErrorState("PATCH Failed");
    }
}
//delete user
document.getElementById("deleteUserBtn")
.addEventListener("click",deleteUser);
async function deleteUser() {
    try {
        showLoadingState();
        await fetch(`${API_URL}/1`,{method:"DELETE"});
        showSuccessState("User Deleted");
        showOutput("DELETE Response",`User Record Deleted Successfully`);
    }
    catch(error){
        showErrorState("DELETE Failed");
    }
}
//loading state button
document.getElementById("loadingBtn")
.addEventListener("click",() => {
        showLoadingState();
        output.innerHTML =`<h3>Please Wait...</h3>`;
    }
);
//success state button
document.getElementById("successBtn")
.addEventListener("click",() => {
        showSuccessState("Operation Successful");
        output.innerHTML =`<h3>Data Saved Successfully</h3>`;
    }
);
//empty state button
document.getElementById("emptyBtn")
.addEventListener("click",() => {
        showEmptyState();
        output.innerHTML =`<h3>No Records Available</h3>`;
    }
);
//error state button
document.getElementById("errorBtn")
.addEventListener("click",() => {
        showErrorState("Something Went Wrong");
        output.innerHTML =`<h3>Error While Processing</h3>`;
    }
);
//modern js
//map
document.getElementById("mapBtn")
.addEventListener("click", mapExample);
function mapExample() {
    showSuccessState("Map Example Loaded");
    const employees = new Map();
    employees.set(101, {name: "Tarak",department: "Frontend"});
    employees.set(102, {name: "Siddu",department: "Backend"});
    employees.set(103, {name: "Soumya",department: "QA"});
    let html = "";
    employees.forEach((value, key) => {
        html += `
        Employee ID : ${key}
        Name : ${value.name}
        Department : ${value.department}
        `;
    });
    showOutput("Map Example",html);
}
//set
document.getElementById("setBtn")
.addEventListener("click", setExample);
function setExample() {
    showSuccessState("Set Example Loaded");
    const skills = new Set();
    skills.add("HTML");
    skills.add("CSS");
    skills.add("JavaScript");
    skills.add("React");
    skills.add("React");
    let result = "";
    skills.forEach(skill => {result += skill + "\n";});
    showOutput("Set Example (Unique Values)",result);
}
//classes and objects
document.getElementById("classBtn")
.addEventListener("click", classExample);
class Employee {
    constructor(id,name,salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    getDetails() {
        return `ID : ${this.id}Name : ${this.name}Salary : ₹${this.salary}`;
    }
}
function classExample() {
    const employee = new Employee(101,"Tarak",50000);
    showOutput("Classes & Objects",employee.getDetails());
}
//inheritance
document.getElementById("inheritanceBtn")
.addEventListener("click",inheritanceExample);
class Manager extends Employee {
    constructor(id,name,salary,department) {
        super(id,name,salary);
        this.department = department;
    }
    managerInfo() {
        return `${this.getDetails()}Department : ${this.department}`;
    }
}
function inheritanceExample() {
    const manager = new Manager(201,"Tarak",80000,"Frontend");
    showOutput("Inheritance Example",manager.managerInfo());
}
//prototype 
document.getElementById("prototypeBtn")
.addEventListener("click",prototypeExample);
function Student(name,course) {
    this.name = name;
    this.course = course;
}
Student.prototype.getProfile =
function () {
    return `Student : ${this.name}Course : ${this.course}`;
};
function prototypeExample() {
    const student = new Student("Tarak","JavaScript");
    showOutput("Prototype Example",student.getProfile());
}
//custom iterator
document.getElementById("iteratorBtn")
.addEventListener("click",iteratorExample);
const company = {
    employees: ["Tarak","Siddu","Chintu","Soumya"],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index <this.employees.length) {
                    return {
                        value:this.employees[index++],
                        done: false
                    };
                }
                return {
                   done: true
                };
            }
        };
    }
};
function iteratorExample() {
    let result = "";
    for (
        let employee of company) {
        result += employee + "\n";
    }
    showOutput("Custom Iterator",result);
}
//generator
document.getElementById("generatorBtn")
.addEventListener("click",generatorExample);
function* ticketGenerator() {
    let ticket = 1001;
    while(true) {
        yield `Ticket Number :${ticket++}`;
    }
}
const tickets = ticketGenerator();
function generatorExample() {
    let result = "";
    result += tickets.next().value;
    result += "\n";
    result += tickets.next().value;
    result += "\n";
    result += tickets.next().value;
    showOutput("Generator Example",result);
}
//optional chaining
document.getElementById("optionalBtn")
.addEventListener("click",optionalExample);
function optionalExample() {
    const employee = {
        name: "Tarak",
        address: {
            city:"Hyderabad"
        }
    };
    const city = employee?.address?.city;
    const country = employee?.address?.country;
    showOutput("Optional Chaining",`City : ${city}Country : ${country}`);
}
//nullish coalescing
document.getElementById("nullishBtn")
.addEventListener("click",nullishExample);
function nullishExample() {
    const employee = {
        name: "Tarak",
        bonus: null
    };
    const bonus = employee.bonus ??"No Bonus Assigned";
    showOutput("Nullish Coalescing",`Employee :${employee.name}Bonus :${bonus}`);
}
//destructuring
document.getElementById("destructuringBtn")
.addEventListener("click",destructuringExample);
function destructuringExample() {
    const employee = {
        id: 101,
        name: "Tarak",
        role:"Frontend Developer"
    };
    const {id,name,role} = employee;
    showOutput("Object Destructuring",`ID : ${id}Name : ${name}Role : ${role}`);
}
//spread operator
document.getElementById("spreadBtn")
.addEventListener("click",spreadExample);
function spreadExample() {
    const frontend = ["HTML","CSS"];
    const javascript = ["JavaScript","React"];
    const skills = [...frontend,...javascript];
    showOutput("Spread Operator",skills.join("\n"));
}
//rest parameters
document.getElementById("restBtn")
.addEventListener("click",restExample);
function calculateTotal(...numbers) {
    return numbers.reduce(
        (total, current) => total + current,0
    );
}
function restExample() {
    const total =
        calculateTotal(10,20,30,40,50);
    showOutput("Rest Parameters",`Total :${total}`);
}
//template literals
document.getElementById("templateBtn")
.addEventListener("click",templateLiteralExample);
function templateLiteralExample() {
    const employee ="Tarak Ram Tilak Gupta";
    const role ="Associate Software Engineer";
    const salary =25000;
    const letter = `Dear ${employee},Congratulations!You have been selected as${role}Salary :₹${salary}Welcome to our company.
    Regards,
    HR Team`;
    showOutput("Template Literals",letter);
}