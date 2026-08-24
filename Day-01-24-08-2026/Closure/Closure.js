function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

// A closure allows an inner function to remember variables from its outer function

function createBankAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit(amount) {
      balance += amount;
    },
    getBalance() {
      return balance;
    }
  };
}
const account = createBankAccount(1000);
account.deposit(1500);
console.log(account.getBalance());