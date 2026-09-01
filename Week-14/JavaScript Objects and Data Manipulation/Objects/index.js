const employee = {
  id: 101,
  name: "Gupta",
  salary: null,

  address: {
    city: "Hyderabad",
    state: "Telangana"
  }
};

// Object.keys()
console.log("Keys:");
console.log(Object.keys(employee));

// Object.values()
console.log("\nValues:");
console.log(Object.values(employee));

// Object.entries()
console.log("\nEntries:");
console.log(Object.entries(employee));

// Optional Chaining
console.log("\nOptional Chaining:");
console.log(employee.address?.city);
console.log(employee.office?.location);

// Nullish Coalescing
console.log("\nNullish Coalescing:");
console.log(employee.salary ?? 50000);
console.log(employee.bonus ?? 10000);