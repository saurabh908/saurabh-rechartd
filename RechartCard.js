import React, { Fragment, Component } from "react";
import { CardGroup } from "react-bootstrap";
import MixedBarChart from './MixedBarChart'

class RechartCard extends Component {
  render() {
    return(
      <Fragment>
        <CardGroup>
        <MixedBarChart/>
        </CardGroup>
        </Fragment>
    )
  }
}

export default RechartCard