import { Component } from "react";
class Child extends Component {
  render() {
    console.log("Child Rendered");

    return <h2>Child Component</h2>;
  }
}
export default Child;