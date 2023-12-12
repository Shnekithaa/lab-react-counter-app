import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  reset = () => {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        <div className="card">
          <h1>Counter App</h1>
          <div>
            <h2>{this.state.count}</h2>
            <button onClick={this.increment} className='green'>Increment</button>
            <button onClick={this.decrement} className='red'>Decrement</button>
            <button onClick={this.reset} className='reset'>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;



