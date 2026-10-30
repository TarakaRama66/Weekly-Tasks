class BankAccount {
    // Private Properties
    #accountHolder;
    #balance;
    // Constructor
    constructor(accountHolder, balance) {
        this.#accountHolder = accountHolder;
        this.#balance = balance;
    }
    // Getter for Account Holder
    get accountHolder() {
        return this.#accountHolder;
    }
    // Setter for Account Holder
    set accountHolder(newName) {
        if (newName.trim().length < 3) {
            throw new Error("Name must contain at least 3 characters.");
        }
        this.#accountHolder = newName.trim();
    }
    // Getter for Balance
    get balance() {
        return this.#balance;
    }
    // Deposit Method
    deposit(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Enter a valid deposit amount.");
        }
        this.#balance += amount;
        return "Deposit successful.";
    }
    // Withdraw Method
    withdraw(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Enter a valid withdrawal amount.");
        }
        if (amount > this.#balance) {
            throw new Error("Insufficient balance.");
        }
        this.#balance -= amount;
        return "Withdrawal successful.";
    }
}
// Creating Account
let account = null;
// HTML Elements
const output = document.getElementById("output");
const message = document.getElementById("message");
// Display Account Details
function displayAccount() {
    if (!account) {
        output.textContent = "No account available.";
        return;
    }
    output.textContent =
        "Account Holder: " + account.accountHolder +
        " | Balance: ₹" + account.balance;
}
// Create Account
document.getElementById("createBtn").addEventListener("click", function () {
    const name = document.getElementById("accountHolder").value.trim();
    const balance = Number(
        document.getElementById("initialBalance").value
    );
    if (name.length < 3 || !Number.isFinite(balance) || balance < 0) {
        message.textContent = "Enter valid account details.";
        return;
    }
    account = new BankAccount(name, balance);
    message.textContent = "Account created successfully.";
    displayAccount();
});
// Deposit
document.getElementById("depositBtn").addEventListener("click", function () {
    if (!account) {
        message.textContent = "Please create an account first.";
        return;
    }
    try {
        const amount = Number(
            document.getElementById("amount").value
        );
        message.textContent = account.deposit(amount);
        displayAccount();
    } catch (error) {
        message.textContent = error.message;
    }
});
// Withdraw
document.getElementById("withdrawBtn").addEventListener("click", function () {
    if (!account) {
        message.textContent = "Please create an account first.";
        return;
    }
    try {
        const amount = Number(
            document.getElementById("amount").value
        );
        message.textContent = account.withdraw(amount);
        displayAccount();
    } catch (error) {
        message.textContent = error.message;
    }
});
// Update Account Holder using Setter
document.getElementById("updateNameBtn").addEventListener("click", function () {
    if (!account) {
        message.textContent = "Please create an account first.";
        return;
    }
    const newName = prompt("Enter new account holder name:");
    if (newName === null) return;
    try {
        account.accountHolder = newName;
        message.textContent = "Account holder updated successfully.";
        displayAccount();
    } catch (error) {
        message.textContent = error.message;
    }
});