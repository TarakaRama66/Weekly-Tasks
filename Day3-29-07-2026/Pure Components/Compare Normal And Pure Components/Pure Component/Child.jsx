import { PureComponent } from "react";
class Child extends PureComponent {
  render() {
    console.log("Child Rendered");
    return <h2>Child Component</h2>;
  }
}
export default Child;