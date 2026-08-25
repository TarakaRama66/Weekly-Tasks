// Spread operator expands elements of an array or properties of an object into individual values
// Array
const numbers = [1,2,3];
console.log(...numbers);

// copy an array
const arr1 =[1,2,3];
const arr2 =[...arr1];
console.log(arr2);
// merge arrays
const array1 =[1,2,3];
const array2=[4,5,6];

const merge=[...array1,...array2];
console.log(merge);

// copy an object
const user ={
    name:"TarakRam",
    age:24
};
const newUser={...user};
console.log(newUser);

// merge Objects
const user1={name:"Gupta"};
const details={city:"Hyderabad"};
const result ={...user1,...details};
console.log(result);

