function Input({setMessage}){
    return(
        <Input
        type="text"
        placeholder="Enter text"
        onChange={(e)=>setMessage(e.target.value)}/>
    );
}
export default Input;