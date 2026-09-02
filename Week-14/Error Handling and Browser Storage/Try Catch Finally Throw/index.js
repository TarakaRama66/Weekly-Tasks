// try try block contains code that may cause an error, if no error occurs, code runs normally
// catch block executes when an error occurs inside the try block
// finally finally block always executes whether an error occurs or not
// throw this keyword allows you to create and throw custom errors manually

function login(username, password){
    try{
        if(!username){
            throw new Error("Username is required");
        }
        if(!password){
            throw new Error("Password is required");
        }
        if(password.length<8){
            throw new Error("Password must contain at least 8 characters");
        }
        console.log(`Welcome ${username} ! Login Successful`);
    }
    catch(error){
        console.log("Login Failed:",error.message);
    }
    finally{
        console.log("Login Request Completed");
    }
}
login("Tarak","12345678");
login("","09876543");
login("TarakRam","123456")