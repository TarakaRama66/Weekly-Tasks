function Returning(){
    function message(){
        return <h2>Have a Great Day</h2>;
    }
    return(
        <div>
            {message()}
        </div>
    );
}
export default Returning;