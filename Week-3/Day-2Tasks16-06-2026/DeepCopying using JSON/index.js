const original = {
  name: "Siddu",
  address: {
    city: "Delhi"
  }
};

const copy = JSON.parse(JSON.stringify(original));

copy.address.city = "Mumbai";

console.log(original);
console.log(copy);