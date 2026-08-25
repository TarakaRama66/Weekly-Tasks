const user={};
console.log(user.address?.city);

// Nested objects
const user1={
    name:"Gupta",
    address:{
        city:"Hyderabad"
    }
};
console.log(user1.address?.city);
console.log(user1.contact?.phone);

// With Arrays
const users=[
    {name:"TarakRam"}
];
console.log(users[0]?.name);
console.log(users[1]?.name);

// Chaining with functions
const user2={
    greet(){
        return "Hello";
    }
};
console.log(user2.greet?.());
console.log(user2.sayHello?.());