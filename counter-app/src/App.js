import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    const newCounters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: newCounters });
  };

  handleIncrement = (c) => {
    const newCounters = this.state.counters.map((each) => each);
    const index = newCounters.indexOf(c);
    newCounters[index].value++;
    this.setState({ counters: newCounters });
  };

  handleDecrement = (c) => {
    const newCounters = this.state.counters.map((each) => each);
    const index = newCounters.indexOf(c);
    if (newCounters[index].value > 0) newCounters[index].value--;
    this.setState({ counters: newCounters });
  };

  handleDelete = (id) => {
    const newCounters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters: newCounters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar totalCounters={this.state.counters.length} />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
