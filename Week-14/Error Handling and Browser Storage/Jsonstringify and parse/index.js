const student={
    id: 466,name:"TarakGupta",skills:["js","React"],address:{city:"Palakollu"}
};
// convert Object to String
const String= JSON.stringify(student);
console.log("JSON:",String);

// convert String to Object
const parsedObject=JSON.parse(String);
console.log("Object:",parsedObject);

console.log(parsedObject.skills[1]);
console.log(parsedObject.address.city);