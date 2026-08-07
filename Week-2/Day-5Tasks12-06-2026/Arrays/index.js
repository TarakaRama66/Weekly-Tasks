// Daily tasks Array 
let dailytasks = [
    "Wakeup","Exercise","Check Emails", "Practice JavaScript", "Eat", "Sleep"
]
console.log(dailytasks);
// usecase: To-do list application

// Employee ID Array
let employees = [101,102, 103,104,105]
console.log(employees)

// Creating Array using loop
let evenNum =[];
for (let g=2; g <=20; g+=2){
    evenNum.push(g);
}
console.log(evenNum)
// Array from the string
let Name = "Tarak";
let words = [...Name]
console.log(words)

// mixed Array
let details = ["Tarak", 23, "Developer"]
console.log(details)

// Array After creation
let colors =[]
colors[0] = "orange"
colors[1] = "Green"
colors[2] = "Black"
console.log(colors)
// Creating Array.of
let arr = Array.of(1,2,3,4);
console.log(arr)

// Array.from()
let chars = Array.from("Tarak Ram")
console.log(chars)