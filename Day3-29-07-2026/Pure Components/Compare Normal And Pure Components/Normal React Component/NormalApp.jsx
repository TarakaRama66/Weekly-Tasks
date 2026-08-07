import { Component } from "react";
import Child from "./Child";

class NormalApp extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() =>this.setState({ count: this.state.count + 5 })}>Increment</button>
        <Child />
      </>
    );
  }
}
export default NormalApp;