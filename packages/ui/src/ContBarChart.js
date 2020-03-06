import React, { Component } from "react";
import { select } from "d3";
import dataset from "../test/fixtures/data";

import barChartHof from "./charts/bar-chart";

class ContBarChart extends Component {
  constructor(props) {
    super(props);
    this.svgRef = React.createRef();
    this.divRef = React.createRef();
  }

  componentDidMount() {
    const svgNode = this.svgRef.current;
    const divNode = this.divRef.current;
    const barChart = barChartHof({ select });

    const svgContainer = select(svgNode);
    svgContainer.datum(dataset).call(barChart());
    const divContainer = select(divNode);
    divContainer.datum(dataset).call(barChart());
  }

  render() {
    return (
      <>
        <div id="svgChartContainer" ref={this.divRef} />
        <svg id="svgChart" ref={this.svgRef} />
      </>
    );
  }
}

export default ContBarChart;
