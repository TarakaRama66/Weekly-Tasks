// extends Error it inherits all error features
// super(message) sets the error message
// this.name sets custom error message
// throw it creates and throws the error
// catch it receives the thrown error
// instanceof It checks the error type
// finally it runs whether error occurs or not

class AgeError extends Error{
    constructor(message, age){
        // call the parent Error constructor
        super(message);
        // custom Error name
        this.name="AgeError";
        // additional custom property
        this.age=age;
    }
}
function registerUser(name,age){
    console.log(`Checking registration for ${name}...`);
    // validation
    if (age<18){
        throw new AgeError("Age must be 18 or above", age);
    }
    return `${name} Registered Successfully`;
}
// handle the errors
try{
    const result = registerUser("Tarak",23);
    console.log(result);
}
catch(error){
    // catch specific error type
    if (error instanceof AgeError){
        console.log("Custom Error Caught");
        console.log("Enter Name:",error.name);
        console.log("Error Message:",error.message);
        console.log("Provided Age:",error.age);
    }else{
        console.log("Unknown Error:",error.message);
    }
}finally{
    console.log("Registration Process Completed");
}