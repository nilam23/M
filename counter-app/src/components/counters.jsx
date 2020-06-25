import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <br />
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={() => this.props.onIncrement(counter)}
            onDecrement={() => this.props.onDecrement(counter)}
            onDelete={() => this.props.onDelete(counter.id)}
            counter={counter}
            selected
          />
        ))}
      </div>
    );
  }
}

export default Counters;
