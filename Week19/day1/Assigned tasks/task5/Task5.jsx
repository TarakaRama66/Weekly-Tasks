function Task5() {
  const employee = {
    id: 101,
    name: "Taraka Ram",
    role: "Associate Software Engineer",
    company: "NYB Infotech"
  };
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux Toolkit"
  ];
  const isLoggedIn = true;
  const greet = () => {
    return "Welcome To React JSX Practice";
  };
  return (
    <>
      <div>
        <h1>Task 5 - Valid and Invalid JSX Examples</h1>
      </div>
      <hr></hr> 
      <h2>Employee Name : {employee.name}</h2>
      <h3>Role : {employee.role}</h3>
      <h3>Company : {employee.company}</h3>
      <hr></hr>
      <h2>{greet()}</h2>
      <hr></hr>
      <h2>
        Login Status :{isLoggedIn ? " Logged In" : " Logged Out"}
      </h2>
      <hr></hr>
      <h2>Addition : {100 + 200}</h2>
      <h2>Multiplication : {20 * 10}</h2>
      <h2>Square : {15 ** 2}</h2>
      <hr></hr>
      <h2>Skills List</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <hr></hr>
      <h2>
        Developer Level :{skills.length > 4 ? " Advanced Developer": " Beginner Developer"}
      </h2>
      <hr></hr> 
      <img src="https://picsum.photos/200"alt="sample"/>
      <br></br>
      <hr></hr>
      <div className="card">React Card Component</div>
      <hr></hr>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        placeholder="Enter Username"
      />
      <hr></hr>
      <h1>Invalid JSX Examples (Comments Only)</h1>
      <pre>
{`
Invalid Example 1

return(
  <h1>React</h1>
  <h2>JSX</h2>
)
Reason: Multiple root elements
Invalid Example 2
<div class="card">
  Hello
</div>
Reason: Use className instead of class
Invalid Example 3
<label for="name">
  Name
</label>
Reason: Use htmlFor instead of for
Invalid Example 4
<img src="image.jpg">
Reason: Tag must be self-closing
Invalid Example 5
{
  if(true){
    <h1>Hello</h1>
  }
}
Reason: if statements are not allowed inside JSX
Invalid Example 6
{
  for(let i=0;i<5;i++){
    <h1>Hello</h1>
  }
}
Reason: Loops cannot be written directly inside JSX
Invalid Example 7
const user = {
  name:"Taraka Ram"
}
<h1>{user}</h1>
Reason: Objects cannot be rendered directly
Use user.name instead
`}
      </pre>
    </>
  );
}
export default Task5;