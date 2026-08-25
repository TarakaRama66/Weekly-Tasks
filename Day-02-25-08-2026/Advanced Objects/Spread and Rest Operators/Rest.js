// Rest Parameter collects multiple values into a single array
//Function Example
function add(...numbers){
    console.log("\nRest Parameters");
    console.log(numbers);
}
add (1,2,3,4,5);

//Sum Example
function sum(...numbers){
    return numbers.reduce((total, num)=>total+num,0);
}
console.log(sum(10,20,30));

// Object Destructuring with Rest
const users1={
    name:"Gupta",
    age:24,
    city:"Hyderabad"
};
const {name,...rest}=users1;
console.log(name);
console.log(rest);