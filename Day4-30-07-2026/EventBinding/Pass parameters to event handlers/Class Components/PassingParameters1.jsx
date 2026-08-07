import { Component } from "react";

class PassingParameters1 extends Component {

  handleClick(event, name) {
    console.log(event.type);
    alert("Hello " + name);
  }

  render() {
    return (
      <>
      <h1>Class Component</h1>
        <button onClick={(event) =>this.handleClick(event, "Gupta")}>Click</button>
      </>
    );
  }
}
export default PassingParameters1;