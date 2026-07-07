// Counter using a closure
function makeCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter()); 
// Count is private and the reutrn function remembers count every call increases the same variable

// Multiplier generator
function makeMultiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5));
console.log(triple(5));

// Bnak Balance
function createAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },

    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
      }
      return balance;
    },

    getBalance() {
      return balance;
    }
  };
}

const account = createAccount(100);

account.deposit(50);
account.withdraw(30);

console.log(account.getBalance()); // 120

// Login Counter
function loginTracker(){
    let loginCount = 0
    return function(){
        loginCount++;
        console.log("loginCount:", loginCount);
    }
}
let login = loginTracker()
login();
login();
login();
login();

console.log("\nEven though outer() has finished executing, inner() still remembers the message variable. That's the essence of a closure.")
