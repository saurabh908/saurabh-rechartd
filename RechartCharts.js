import React from "react";
import { Card } from "react-bootstrap";
import MixedBarChart from './MixedBarChart'

export default class BarChart extends React.Component {
  render() {
    return (
      <div>
        <Card style={{ width: "35rem", height: "25rem" }}>
          <Card.Header>Multi Bar Chart</Card.Header>
          <Card.Body>
            <MixedBarChart />
          </Card.Body>
        </Card>
        &nbsp;
      </div>
    );
  }
}
