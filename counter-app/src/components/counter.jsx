import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <span className={this.getClass()}>{this.getCount()}</span>
        <button
          onClick={this.props.onIncrement}
          className="btn btn-info btn-small m-2"
        >
          Increment
        </button>
        <button
          onClick={this.props.onDecrement}
          className="btn btn-success btn-sm m-2"
        >
          Decrement
        </button>
        <button
          onClick={this.props.onDelete}
          className="btn btn-danger btn-small m-2"
        >
          Delete
        </button>
        <br />
      </React.Fragment>
    );
  }

  getClass() {
    let className = "badge m-2 badge-";
    return (className +=
      this.props.counter.value === 0 ? "warning" : "primary");
  }

  getCount() {
    var { value: v } = this.props.counter;
    return v === 0 ? "Zero" : v;
  }
}

export default Counter;
