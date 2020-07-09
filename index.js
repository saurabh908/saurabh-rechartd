import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import MixedBarChart from './MixedBarChart'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Recharts Demo'
    };
  }

  render() {
    return (
      <div>
        <MixedBarChart />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
