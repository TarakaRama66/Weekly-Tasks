function runExamples() {
    const output = document.getElementById("output");
    output.textContent = "";

    function print(title, value) {
        output.textContent += `${title}: ${value}\n`;
    }
    // Global scope
    const company = "NYB Infotech";
    var location = "Hyderabad";

    function showCompany() {
        print("Company", company);
        print("Location", location);
    }
    print("1. GLOBAL SCOPE", "");
    showCompany();
    // Function scope
    print("\n2. FUNCTION SCOPE", "");
    function calculateSalary() {
        var basicSalary = 30000;
        let bonus = 5000;
        const allowance = 2000;
        return basicSalary + bonus + allowance;
    }
    print("Total salary", calculateSalary());
    try {
        print("Basic salary outside function", basicSalary);
    } catch (error) {
        print("Access error", error.name);
    }
    //Block scope
    print("\n3. BLOCK SCOPE", "");
    if (true) {
        var department = "Development";
        let project = "Employee Portal";
        const status = "Active";
        print("Department", department);
        print("Project", project);
        print("Status", status);
    }
    print("Department outside block", department);
    print("Project outside block", typeof project);
    print("Status outside block", typeof status);
    //Nested scope
    print("\n4. NESTED SCOPE", "");
    function manager() {
        const managerName = "Ravi";
        function developer() {
            const developerName = "Arun";
            print("Manager", managerName);
            print("Developer", developerName);
        }
        developer();
    }
    manager();
    // Variable shadowing
    print("\n5. VARIABLE SHADOWING", "");
    let employee = "Rahul";
    function changeEmployee() {
        let employee = "Kiran";
        print("Inside function", employee);
    }
    changeEmployee();
    print("Outside function", employee);
    // Loop scope
    print("\n6. LOOP SCOPE", "");
    for (let i = 1; i <= 3; i++) {
        print("let iteration", i);
    }
    for (var j = 1; j <= 3; j++) {}
    print("var after loop", j);
    // Closure
    print("\n7. CLOSURE", "");
    function createCounter() {
        let count = 0;
        return function () {
            count++;
            return count;
        };
    }
    const counter = createCounter();
    print("Counter 1", counter());
    print("Counter 2", counter());
    print("Counter 3", counter());
    // Private state
    print("\n8. PRIVATE STATE", "");
    function createWallet(initialAmount) {
        let balance = initialAmount;
        return {
            add(amount) {
                if (amount > 0) {
                    balance += amount;
                }
                return balance;
            },
            getBalance() {
                return balance;
            }
        };
    }
    const wallet = createWallet(1000);
    print("Initial balance", wallet.getBalance());
    print("After adding 500", wallet.add(500));
    print("Current balance", wallet.getBalance());

    // Scope in callbacks
    print("\n9. CALLBACK SCOPE", "");
    function processEmployees() {
        const employees = ["Ravi", "Priya", "Arun"];
        employees.forEach(function (name) {
            print("Employee", name);
        });
    }
    processEmployees();
}
function clearOutput() {
    document.getElementById("output").textContent = "";
}