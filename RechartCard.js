import React, { Fragment, Component } from "react";
import { CardGroup } from "react-bootstrap";
import RechartCharts from './RechartCharts'

class RechartCard extends Component {
  render() {
    return(
      <Fragment>
        <CardGroup>
          <RechartCharts/>
        </CardGroup>
      </Fragment>
    )
  }
}

export default RechartCard