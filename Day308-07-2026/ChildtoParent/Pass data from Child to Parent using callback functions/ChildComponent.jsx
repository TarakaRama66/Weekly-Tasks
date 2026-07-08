function ChildComponent({sendData}){
    const Click=()=>{sendData("Hello Parent! This Message from Child Component");
    };
    return(
        <>
        <h2>Child Component</h2>
        <button onClick={Click}>Send Data to parent</button>
        </>
    )
}
export default ChildComponent;