import { PureComponent } from "react";

class Counter extends PureComponent {
  state = {count: 0,};
  render() {
    return (
      <>
        <h2>{this.state.count}</h2>
        <button
          onClick={() =>this.setState({count: this.state.count + 1,})}>
          Increment
        </button>
      </>
    );
  }
}
export default Counter;