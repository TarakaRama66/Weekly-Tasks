// CLOSURE COUNTER
function createCounter() {
    let count = 0;
    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        reset: function () {
            count = 0;
            return count;
        }
    };
}
const counter = createCounter();
function increment() {
    document.getElementById("count").innerText =
        counter.increment();
}
function decrement() {
    document.getElementById("count").innerText =
        counter.decrement();
}
function reset() {
    document.getElementById("count").innerText =
        counter.reset();
}
// DATA PRIVACY USING CLOSURE
function createBankAccount() {
    let balance = 1000;
    return {
        getBalance: function () {
            return balance;
        },
        deposit: function (amount) {
            balance += amount;
            return balance;
        },
        withdraw: function (amount) {
            if (amount > balance) {
                return "Insufficient Balance";
            }
            balance -= amount;
            return balance;
        }
    };
}
const account = createBankAccount();
function showBalance() {
    document.getElementById("balance").innerText =
        "Current Balance: " + account.getBalance();
}
function deposit() {
    let result = account.deposit(500);
    document.getElementById("balance").innerText =
        "Current Balance: " + result;
}
function withdraw() {
    let result = account.withdraw(200);
    document.getElementById("balance").innerText =
        typeof result === "number"
            ? "Current Balance: " + result
            : result;

}