import Child from "./Child"
function Parent(){
    return(
        <div>
            <br></br>
            <h1>Parent to Child Components</h1>
            <Child name="Gupta"
            course = "React JS"
            city = "Hyderabad"/>
        </div>
    );
}
export default Parent;