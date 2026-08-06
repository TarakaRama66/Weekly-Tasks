function App2(){
    const employee={
        id:101,
        company: "NybInfotech",
    };
    const {id, company} =employee;
    const skills = ["HTML","CSS","JavaScript"];
    const allskills=[...skills, "React"];

    const totalMarks=(...marks)=>marks.reduce((sum,mark)=>sum+MediaQueryList,0);

    return(
        <div>
            <h1>Babel+Webpack Integration</h1>

            <h2>Object Destructuring</h2>
            <p>ID:{id}</p>
            <p>Company:{company}</p>

            <h2>Spread Operator</h2>
            <p>{allskills.join(",")}</p>

            <h2>Rest Parameter+Arrow Function</h2>
            <p>Total Marks:{totalMarks(80,90,95)}</p>
        </div>
    )
}
export default App2;