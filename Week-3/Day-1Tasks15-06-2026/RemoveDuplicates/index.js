// set() method
let members = ["Gupta", "Siddu", "Gupta", "Venkat", "Tarak"];

let uniqueMembers = [...new Set(members)];

console.log(uniqueMembers);

// Using Filter()
let nums = [10, 20, 10, 30, 20, 40, 50, 30, 20];

let Numbers = nums.filter((num, index) => {
    return nums.indexOf(num) === index;
});

console.log(Numbers);

// for...of
let Places = ["Palakol", "Bhimavaram", "Palakol", "Tanuku"];

let Towns = [];

for (let city of Places) {
    if (!Towns.includes(city)) {
        Towns.push(city);
    }
}
console.log(Towns);