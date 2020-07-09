import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import RechartCard from './RechartCard'

import { Card, Container, Jumbotron } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Recharts Demo'
    };
  }

  render() {
    return (
      <Container>
      <Jumbotron>
      <h4>Demo</h4>
      <RechartCard />
       </Jumbotron>
    </Container>
     
    );
  }
}

render(<App />, document.getElementById('root'));
