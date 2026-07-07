function Child(props){
    return(
        <div>
            <h2>Student Details</h2>
            <p>Name: {props.name}</p>
            <p>Course:{props.course}</p>
            <p>City:{props.city}</p>
        </div>
    )
}
export default Child;