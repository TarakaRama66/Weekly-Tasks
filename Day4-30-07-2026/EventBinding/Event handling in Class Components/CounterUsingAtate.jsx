import { Component } from "react";

class CounterUsingState extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  reset() {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <>
        <h2>Counter App</h2>

        <h3>{this.state.count}</h3>

        <button onClick={this.increment}>+</button>

        <button onClick={this.decrement}>-</button>

        <button onClick={this.reset}>Reset</button>
      </>
    );
  }
}

export default CounterUsingState;