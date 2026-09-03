async function fetchUserData(){
    try{
        console.log("Loading...");
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if(!response.ok){
            throw new Error("Request Failed");
        }
        const user = await response.json();

        console.log("Name:",user.name);
        console.log("Email:",user.email);
        console.log("City:",user.address.city);
    }
    catch (error){
        console.log("Error:",error.message);
    }
    finally{
        console.log("Request Completed");
    }
}
fetchUserData();